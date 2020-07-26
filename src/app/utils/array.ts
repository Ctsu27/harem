export function arrayRemove<T>(a: T[], cmp: (value: T, index: number, obj: T[]) => boolean) {
  const index = a.findIndex(cmp);
  let element: T | undefined;

  if (index >= 0) {
    element = a[index];
    a.splice(index, 1);
  }
  return {
    array: a,
    element
  };
}
