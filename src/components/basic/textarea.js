export const Textarea = ({
  labelClasses,
  textareaClasses,
  label,
  ...props
}) => {
  return (
    <label className={labelClasses}>
      {label}
      <textarea className={textareaClasses} {...props}></textarea>
    </label>
  );
};
