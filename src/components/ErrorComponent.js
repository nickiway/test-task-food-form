export default function ErrorComponent({ error }) {
  const { isOk, status, message } = error;
  return (
    !isOk && (
      <div className="error">
        {message} , Error status: {status}
      </div>
    )
  );
}
