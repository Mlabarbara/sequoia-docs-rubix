import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Infrastructure",
    href: "/infrastructure",
    heading: "Core Systems",
    items: [
      {
        title: "Hardware",
        href: "/hardware",
        items: [
          {
            title: "Computers",
            href: "/computers",
          },
          {
            title: "Servers",
            href: "/servers",
            items: [
              {
                title: "R440 Server",
                href: "/r440-server",
              },
              {
                title: "R630 Server",
                href: "/r630-server",
              },
            ],
          },
          {
            title: "Network Devices",
            href: "/network-devices",
          },
        ],
      },
      {
        title: "Storage",
        href: "/storage",
        items: [
          {
            title: "Proxmox Backup Server",
            href: "/pbs",
          },
          {
            title: "TrueNAS",
            href: "/truenas",
          },
          {
            title: "QNAP",
            href: "/qnap",
          },
        ],
      },
      {
        title: "Network Architecture",
        href: "/network-architecture",
        items: [
          {
            title: "Topology",
            href: "/topology",
          },
          {
            title: "Switches",
            href: "/switches",
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Microsoft",
    href: "/microsoft",
    heading: "Microsoft Systems",
    items: [
      {
        title: "Active Directory",
        href: "/active-directory",
        items: [
          {
            title: "Domain Controllers",
            href: "/domain-controllers",
          },
          {
            title: "Group Policy",
            href: "/group-policy",
          },
        ],
      },
      {
        title: "Windows Management",
        href: "/windows-management",
        items: [
          {
            title: "Workstation Setup",
            href: "/workstation-setup",
          },
          {
            title: "File Servers",
            href: "/file-servers",
          },
        ],
      },
      {
        title: "Office 365",
        href: "/office-365",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Systems & Services",
    href: "/systems-and-services", 
    heading: "Platform Services",
    items: [
      {
        title: "Proxmox",
        href: "/proxmox",
        items: [
          {
            title: "R440 Configuration",
            href: "/r440-config",
          },
          {
            title: "R630 Configuration", 
            href: "/r630-config",
          },
        ],
      },
      {
        title: "Communications",
        href: "/communications",
        items: [
          {
            title: "Nextiva",
            href: "/nextiva",
            items: [
              {
                title: "Phone Setup",
                href: "/phone-setup", 
              },
              {
                title: "Admin Portal",
                href: "/admin-portal",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Security",
    href: "/security",
    heading: "Security & Access",
    items: [
      {
        title: "Firewall",
        href: "/firewall",
        items: [
          {
            title: "Policies",
            href: "/policies",
          },
          {
            title: "VPN",
            href: "/vpn",
          },
        ],
      },
      {
        title: "Access Management",
        href: "/access-management",
        items: [
          {
            title: "User Management",
            href: "/user-management",
          },
          {
            title: "Groups Overview",
            href: "/groups-overview",
          },
        ],
      },
      {
        title: "Twingate",
        href: "/twingate",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Support",
    href: "/support",
    heading: "Support & Maintenance",
    items: [
      {
        title: "Troubleshooting",
        href: "/troubleshooting",
        items: [
          {
            title: "Network Issues",
            href: "/network-issues",
          },
          {
            title: "Server Problems",
            href: "/server-problems",
          },
          {
            title: "User Access",
            href: "/user-access-issues",
          },
        ],
      },
      {
        title: "Software Management",
        href: "/software-management",
        items: [
          {
            title: "Business Licenses",
            href: "/business-licenses",
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Introduction",
    href: "/introduction",
    heading: "Getting started",
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Setup",
        href: "/setup",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Navigation",
    href: "/navigation",
    heading: "Documents",
  },
  {
    title: "Structure",
    href: "/structure",
    items: [
      {
        title: "Deeper",
        href: "/deeper",
        items : [
          {
            title: "Even deeper",
            href: "/even-deeper",
          },
        ]
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Markup",
    href: "/markup",
    heading: "Components",
    items: [
      {
        title: "Cards",
        href: "/cards",
      },
      {
        title: "Diagrams",
        href: "/diagrams",
      },
      {
        title: "Filetree",
        href: "/filetree",
      },
      {
        title: "Lists",
        href: "/lists",
      },
      {
        title: "Maths",
        href: "/maths",
      },
      {
        title: "Notes",
        href: "/notes",
      },
      {
        title: "Steps",
        href: "/steps",
      },
      {
        title: "Table",
        href: "/table",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
    ],
  },
];