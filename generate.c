#define NOB_STRIP_PREFIX
#define NOB_IMPLEMENTATION
#include "nob.h"
#define JIM_IMPLEMENTATION
#include "jim.h"

#include <stdio.h>
#include <string.h>

bool add_dir(const char *path, Jim *jim) {
    File_Paths children = {0};
    if (!read_entire_dir(path, &children)) return false;

    size_t save = temp_save();

    jim_array_begin(jim);
    da_foreach(const char *, dir, &children) {
        const char *newpath = temp_sprintf("%s/%s", path, *dir);
        jim_object_begin(jim);

        jim_member_key(jim, "name");
        jim_string(jim, *dir);

        jim_member_key(jim, "type");
        switch (get_file_type(newpath)) {
        case FILE_DIRECTORY:
            jim_string(jim, "dir");

            if (strcmp(*dir, ".") == 0 || strcmp(*dir, "..") == 0) break;
            jim_member_key(jim, "children");
            add_dir(newpath, jim);
            break;
        default:
            jim_string(jim, "file");

            String_Builder sb = {0};
            if (!read_entire_file(newpath, &sb)) return false;

            jim_member_key(jim, "content");
            jim_string_sized(jim, sb.items, sb.count);
            sb_free(sb);
            break;
        }

        jim_object_end(jim);
    }
    jim_array_end(jim);
    temp_rewind(save);
    da_free(children);

    return true;
}

int main() {
    Jim jim = {.pp = 2};
    jim_begin(&jim);

    if (!add_dir("content", &jim)) return 1;
    write_entire_file("content.json", jim.sink, jim.sink_count);

    temp_reset();
    free(jim.sink);
    free(jim.scopes);
}
