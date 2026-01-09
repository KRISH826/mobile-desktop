
import { resolveDevice } from "@/lib/device";
import MobileHome from "@/components/mobile/MobileHome";
import DesktopHome from "@/components/desktop/DesktopHome";

export default async function Home() {
  const device = await resolveDevice();

  if (device === "mobile") {
    return <MobileHome />;
  }

  return <DesktopHome />;
}
