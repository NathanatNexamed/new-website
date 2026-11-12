import LogoLoop from "../react-bits/LogoLoop";

// Text wordmarks until there's permission to use real platform logos.
const platforms = [
  { name: "GoHighLevel", href: "/integrations/gohighlevel/" },
  { name: "Zenoti", href: "/integrations/zenoti/" },
  { name: "OptiMantra", href: "/integrations/providi/" },
  { name: "Cerbo", href: "/integrations/cerbo/" },
  { name: "Google Ads", href: "/services/google-ads/" },
  { name: "Meta", href: "/services/meta-ads/" },
];

export default function PlatformLoop() {
  return (
    <LogoLoop
      logos={platforms.map((p) => ({
        node: <span className="pl-chip">{p.name}</span>,
        href: p.href,
        title: p.name,
        ariaLabel: p.name,
      }))}
      speed={38}
      direction="left"
      logoHeight={64}
      gap={14}
      pauseOnHover
      fadeOut
      intro={false}
      fadeOutColor="#F4F7FB"
      ariaLabel="Platforms we build on"
    />
  );
}
