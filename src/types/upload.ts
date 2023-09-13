export const uploadFileDefault = {
    upload: {
        name: '',
        mime_type: '',
        path: '',
    },
    preview: '',
} as const;
export type UploadFileType = typeof uploadFileDefault;