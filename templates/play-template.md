---
# --- Play Info (Required) ---
title: 'Your Play Title Here'
description: 'A brief, one-sentence summary of what this play is about.'
# Choose ONE category that best fits your play.
# Available options: 'Character Consistency', 'Motion & Animation', 'World Building & Style', 'Post-Production & Effects'
category: 'Motion & Animation'
# Use YYYY-MM-DD format. This is when the play is first published.
publishDate: '2025-11-24'
author: 'Your Name'

# --- Optional Info ---
# Use YYYY-MM-DD format. Update this if you make significant changes.
lastUpdated: '2025-11-24'
# Path to the hero image/video for the play card. Should be in /public/The-Latent-Playbook/assets/videos/your-play-slug/
heroMedia: '/The-Latent-Playbook/assets/videos/your-play-slug/hero.jpg'
# Difficulty level for the technique.
# Available options: 'beginner', 'intermediate', 'advanced'
difficulty: 'intermediate'
# Add relevant tags to help users find your play.
tags:
  - ComfyUI
  - Key-Tool-Or-Concept
---

<!-- 
=================================================================
=================================================================
INSTRUCTIONS FOR AUTHORS
=================================================================
=================================================================

Welcome, contributor! Thanks for sharing your knowledge.

### 1. File Location

-   Create a new Markdown file in `src/content/plays/`.
-   The filename should be a short, descriptive slug (e.g., `my-cool-technique.md`). This slug will be part of the URL.

### 2. Media Assets

-   Create a corresponding folder for your media assets in `public/The-Latent-Playbook/assets/videos/`.
-   Use the same slug as your Markdown file (e.g., `public/The-Latent-Playbook/assets/videos/my-cool-technique/`).
-   Place all videos, GIFs, and images for your play in this folder.

### 3. Frontmatter

-   Fill out the frontmatter section above.
-   Required fields are `title`, `description`, `category`, `publishDate`, and `author`.
-   Ensure dates are in `YYYY-MM-DD` format.

### 4. Content

-   Write your content below this comment block.
-   Use standard Markdown for formatting.
-   Reference your media assets using paths relative to the `public` folder (e.g., `/The-Latent-Playbook/assets/videos/my-cool-technique/example.mp4`).

=================================================================
-->

## Introduction

Start with a compelling introduction. Explain what the technique is, why it's useful, and what the reader will learn. Set the stage for the rest of the play.

<video controls autoplay loop muted playsinline>
  <source src="/The-Latent-Playbook/assets/videos/your-play-slug/example-1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*A caption explaining what this video demonstrates.*

## Core Concepts

Use H2 (`##`) headings to break your play into logical sections. Explain the key ideas, tools, or concepts involved.

### Sub-Section (H3)

Use H3 (`###`) headings for more detailed points within a section. This helps keep the content organized and easy to scan.

Here's how you can embed an image:

<img src="/The-Latent-Playbook/assets/videos/your-play-slug/example-image.png" alt="Alt text for the image" style="width:60%;"/>

*A caption for the image.*

## Workflow or Tutorial

This is where you can provide a step-by-step guide.

1.  **Step 1:** Explain the first step clearly.
2.  **Step 2:** Use code blocks for any scripts or commands.
    ```bash
    npm install cool-package
    ```
3.  **Step 3:** Use `div` with `video-grid` class for side-by-side video comparisons.

<div class="video-grid">
  <video controls autoplay loop muted playsinline>
    <source src="/The-Latent-Playbook/assets/videos/your-play-slug/comparison-a.mp4" type="video/mp4" />
  </video>
  <video controls autoplay loop muted playsinline>
    <source src="/The-Latent-Playbook/assets/videos/your-play-slug/comparison-b.mp4" type="video/mp4" />
  </video>
</div>

## Conclusion

Summarize the key takeaways. What did the reader learn? What are the limitations or next steps?

## Resources

Provide a list of helpful links for further reading or downloads.

-   [Link to a relevant tool](https://example.com)
-   [Hugging Face Paper or Model](https://huggingface.co/)
-   [Another useful resource](https://example.com)
