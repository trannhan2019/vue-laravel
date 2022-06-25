<script setup>
import { ref, onMounted } from "vue";
import Editor from "@tinymce/tinymce-vue";
import { useField } from "vee-validate";
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
});
const { errorMessage, value } = useField(props.name);

let file_picker_callback = (callback, value, meta) => {
    let x =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;
    let y =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.getElementsByTagName("body")[0].clientHeight;

    let cmsURL =
        configTiny.path_absolute +
        "laravel-filemanager?editor=" +
        meta.fieldname;
    //   let cmsURL =
    //     "http://localhost:8000/laravel-filemanager?field_name=" + meta.fieldname;
    if (meta.filetype == "image") {
        cmsURL = cmsURL + "&type=Images";
    } else {
        cmsURL = cmsURL + "&type=Files";
    }

    tinymce.activeEditor.windowManager.openUrl({
        url: cmsURL,
        title: "Filemanager",
        width: x * 0.8,
        height: y * 0.8,
        resizable: "yes",
        close_previous: "no",
        onMessage: (api, message) => {
            callback(message.content);
        },
    });
};

const configTiny = {
    path_absolute: "/",
    relative_urls: false, //false
    selector: "textarea",
    height: 500,
    plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table paste code help wordcount",
    ],
    toolbar:
        "undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help",
    file_picker_callback: file_picker_callback,
};
onMounted(() => {
    let tinymce = ref(null);
});
</script>

<template>
    <a-form-item
        :label="label"
        :has-feedback="!!errorMessage"
        :help="errorMessage"
        :validate-status="errorMessage ? 'error' : undefined"
    >
        <editor
            api-key="no-api-key"
            :init="configTiny"
            ref="tinymce"
            v-model="value"
        />
    </a-form-item>
</template>
