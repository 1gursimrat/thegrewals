#!/bin/bash

echo "📁 Creating app routes..."

mkdir -p app/home
mkdir -p "app/invite/[slug]"
mkdir -p app/events
mkdir -p app/gallery
mkdir -p app/memories
mkdir -p app/resources
mkdir -p app/rsvp
mkdir -p app/admin

create_page () {
cat <<EOF > "$1"
export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">$2</h1>
    </main>
  );
}
EOF
}

create_page app/home/page.tsx "Home"
create_page "app/invite/[slug]/page.tsx" "Invite"
create_page app/events/page.tsx "Events"
create_page app/gallery/page.tsx "Gallery"
create_page app/memories/page.tsx "Memory Wall"
create_page app/resources/page.tsx "Guest Resources"
create_page app/rsvp/page.tsx "RSVP"
create_page app/admin/page.tsx "Admin Dashboard"

echo "✅ Project structure created!"