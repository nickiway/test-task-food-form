export default function ErrorReport({ error }) {
  return error && <div className="error">{"Something went wrong"}</div>;
}
