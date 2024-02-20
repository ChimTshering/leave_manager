export function formDataToJson(formData: FormData) {
  const object: any = {};
  formData.forEach((value, key) => {
    object[key] = value?.toString();
  });
  return JSON.stringify(object);
}
