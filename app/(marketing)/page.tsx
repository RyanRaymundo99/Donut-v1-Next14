import { Button } from "@/components/ui/button";

export default function Home() {
  return <div className="p-4 space-y-4 flex flex-col max-w-96">
    <Button>Default</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="primaryOutlined">Primary outlined</Button>
    <Button variant="secondary">secondary</Button>
    <Button variant="secondaryOutlined">Secondary outlined</Button>
    <Button variant="danger">danger</Button>
    <Button variant="dangerOutlined">Danger outlined</Button>
    <Button variant="super">super</Button>
    <Button variant="superOutlined">super outlined</Button>
    <Button variant="sidebar">sidebar</Button>
    <Button variant="sidebarOutlined">sidebar outlined</Button>
    <Button variant="ghost">ghost</Button>
  </div>;
}
