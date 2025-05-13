export default defineAppConfig({
  ui: {
    colors: {
      primary: "teal",
      gray: "neutral",
    },
    formGroup: {
      help: "text-xs mt-1 text-gray-500 dark:text-gray-400",
      error: "text-xs mt-1 text-red-500 dark:text-red-400",
      label: {
        base: "text-sm block font-medium text-gray-500 dark:text-gray-200",
      },
    },
    button: {
      variants: {
        rounded: {
          base: "rounded-md transition-transform active:scale-x-[0.98] active:scale-y-[0.99]",
        },
      },
    },
    modal: {
      slots: {
        overlay: "bg-[rgba(0,8,47,.275)] saturate-50",
        content: "p-0 rounded-t-2xl sm:rounded-xl w-full sm:max-w-[50vw]",
      },
    },
    container: {
      base: "max-w-2xl",
    },
  },
});
