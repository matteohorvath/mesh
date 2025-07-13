# PostHog Analytics Setup

PostHog has been integrated into the mesh website for analytics tracking.

## Environment Variables

Add the following environment variables to your `.env.local` file:

```env
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_api_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

## Usage

### Automatic Tracking

The PostHog provider automatically tracks:
- Page views
- Page leaves
- Route changes

### Manual Event Tracking

Use the `usePostHog` hook in your components:

```tsx
import { usePostHog } from '@/lib/hooks/use-posthog'

export function MyComponent() {
  const { capture, identify, isInitialized } = usePostHog()

  const handleClick = () => {
    capture('button_clicked', {
      button_name: 'cta_button',
      page: '/home'
    })
  }

  const handleUserLogin = (userId: string) => {
    identify(userId, {
      email: 'user@example.com',
      plan: 'premium'
    })
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  )
}
```

## Features

- **Automatic pageview tracking** on route changes
- **Custom event tracking** via the `usePostHog` hook
- **User identification** for personalized analytics
- **Server-side rendering safe** with proper client-side initialization
- **TypeScript support** with proper type definitions

## Files Modified

- `lib/posthog.ts` - PostHog configuration and initialization
- `components/posthog-provider.tsx` - Provider component for app-wide tracking
- `app/layout.tsx` - Root layout with PostHog provider
- `lib/hooks/use-posthog.ts` - Custom hook for PostHog usage in components 