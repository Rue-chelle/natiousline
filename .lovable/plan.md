

# Services Cards with Image Grids

## What we'll build
Each service card will have a 2x2 grid of sample work images below the title and description. Clicking any image opens it in a fullscreen lightbox/dialog with a zoom view.

## Technical approach

1. **Generate 24 images** (4 per service) using AI image generation -- sample work photos for each service category (business cards, banners, t-shirts, stickers, flyers, booklets).

2. **Update `Services.tsx`**:
   - Add an `images` array to each service object (4 image paths per service)
   - Render a 2x2 grid of images below the `CardDescription`
   - Add `CardContent` to the card for the image grid
   - Each image has `cursor-pointer` and hover scale effect

3. **Add lightbox dialog**:
   - Use the existing `Dialog` component from shadcn/ui
   - Track selected image in state
   - Clicking an image opens the dialog showing the full-size image
   - Clean zoom-in animation via dialog's built-in transitions

4. **Responsive considerations**:
   - On mobile (360px viewport), the 2x2 grid stays compact within each card
   - Images use `aspect-square` and `object-cover` for consistency
   - Cards remain in single column on mobile, 2 cols on sm, 3 on lg

