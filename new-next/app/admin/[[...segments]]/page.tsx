import { getPayload } from "payload";
import config from "../../../payload.config";

export default async function AdminPage() {
  const payload = await getPayload({ config });

  return (
    <div>
      <h1>PayloadCMS Admin</h1>
      <p>Admin interface will be available here</p>
    </div>
  );
}
