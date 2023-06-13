export const apiVersion = "2023-06-13";

export const dataset = "production";

export const projectId = "5g7ssslg";

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
