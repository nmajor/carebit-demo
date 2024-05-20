export function FormError({ errors }: { errors?: string[] | string }) {
  if (!errors || errors.length === 0) {
    return null;
  }

  if (Array.isArray(errors)) {
    return errors.map((error) => (
      <p key={error} className="text-sm font-medium text-destructive">
        {error}
      </p>
    ));
  }

  return <p className="text-sm font-medium text-destructive">{errors}</p>;
}
