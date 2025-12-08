---
# --- Play Info (Required) ---
title: '2025 Benchmarking of Character Consistency: Kling O1, Veo 3.1, Hailuo 2.3, Gen-4 & Hunyuan 1.5'
description: 'A quick, practical test comparing how leading proprietary and open-source video models handle character consistency in late 2025.'
# Choose ONE category that best fits your play.
category: 'Character Consistency'
# Use YYYY-MM-DD format.
publishDate: '2025-12-04'
author: 'Yuguang Zhang'

# --- Optional Info ---
authorUrl: 'https://www.ygzhang.com'
lastUpdated: '2025-12-06'
heroMedia: '/The-Latent-Playbook/assets/videos/character-consistency-benchmark/hero.jpg'
difficulty: 'beginner'
tags:
  - Kling O1
  - Runway Gen-4
  - Google Veo 3
  - Hailuo
  - Hunyuan
  - Benchmarking
---

## Introduction

As of late 2025, one of the "Holy Grail" of AI video generation remains **Identity Retention**. It's one thing to generate a beautiful 5-second clip; it's another to make a specific character interact with a specific environment without hallucinating new clothes, changing faces, or floating through solid objects.

In this post, we are conducting a quick benchmark of five leading models—**Kling O1, Google Veo 3.1 (in Runway), Hailuo 2.3, Runway Gen-4, and Hunyuan 1.5**—to see how they handle specific character, scene, and action constraints in a "one-shot" test.

## The Benchmark Setup

To ensure a comparable baseline, we prepared a specific set of assets. We are testing not just face consistency, but "World Understanding"—how the character interacts with depth, occlusion, and lighting.

### The References

We used the following four images to guide the generation:

<div style="display: flex; gap: 10px; margin-bottom: 20px;">
  <div style="flex: 1;">
    <img src="/The-Latent-Playbook/assets/videos/character-consistency-benchmark/character.jpg" alt="Reference Character Front" style="width:100%; border-radius: 8px;"/>
    <p><em><strong>1. Character Reference:</strong> A close-up headshot. We use this to test if the model can infer a full body and consistent outfit (grey v-neck) in a medium shot without hallucinating details.</em></p>
  </div>
  <div style="flex: 1;">
    <img src="/The-Latent-Playbook/assets/videos/character-consistency-benchmark/character-2.jpg" alt="Reference Character Side" style="width:100%; border-radius: 8px;"/>
    <p><em><strong>2. Side Profile:</strong> Generated via Qwen Image Edit with Camera Control. This provides the model with spatial data for profile views.</em></p>
  </div>
</div>

<div style="display: flex; gap: 10px; margin-bottom: 20px;">
  <div style="flex: 1;">
    <img src="/The-Latent-Playbook/assets/videos/character-consistency-benchmark/scene.jpg" alt="Scene Reference" style="width:100%; border-radius: 8px;"/>
    <p><em><strong>3. Scene Reference:</strong> A rustic bridge flanked by trees. This tests <strong>physical world understanding</strong>. Can the model understand that the character needs to walk <strong>between</strong> the trees and onto the bridge, handling occlusion correctly?</em></p>
  </div>
  <div style="flex: 1;">
    <img src="/The-Latent-Playbook/assets/videos/character-consistency-benchmark/start.jpg" alt="Synthesized Start Frame" style="width:100%; border-radius: 8px;"/>
    <p><em><strong>4. Start Frame:</strong> A synthesized composite of the woman on the bridge. This was used for models (Gen-4, Hailuo, Hunyuan) that do not yet support simultaneous Character + Scene reference inputs.</em></p>
  </div>
</div>

### The Prompt

We used the exact same instruction for all models to test their natural language understanding and instruction following capabilities.

> "A medium shot video of the middle-aged East Asian woman from the reference image, wearing the same grey v-neck t-shirt with her hair tied back loosely. She is walking slowly from left to right across the rustic wooden bridge shown in the Japanese garden reference image. She pauses midway on the bridge, gently leaning her hands on the wooden railing to look down into the koi pond below. The lighting is soft, diffused daylight, capturing the serene atmosphere and the mossy details of the garden."

**Why this action?**
Asking the character to *lean on a railing* and *look down* is a stress test for rigging. It requires the model to understand weight distribution (leaning) and handle facial angles (looking down) without breaking the character's facial geometry.

## The Results

We tested two distinct workflows based on the models' current capabilities:
1.  **Multiple Reference Inputs:** Kling O1 & Veo 3.1 (Input: Character Image + Scene Image)
2.  **Start Frame Image-to-Video:** Hailuo 2.3, Gen-4 & Hunyuan 1.5 (Input: Synthesized Start Frame)

### 1. Kling O1 (Multiple References)

Kling O1 supports the "All-in-One" reference system, allowing us to upload both the character and the scene separately.

<video controls autoplay loop muted playsinline>
  <source src="/The-Latent-Playbook/assets/videos/character-consistency-benchmark/kling-o1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

**Observations:**
* **Strengths:** The character consistency is quite accurate to the reference. It handles the environment well, blending the character into the lighting perfectly. The camera movement is smooth, and the specific action—leaning on the railing and looking down—is depicted with natural weight and detailed hand interaction.
* **Weaknesses:** It struggled slightly with the temporal instruction. Instead of walking *onto* the bridge, the video starts with her already midway through the action (althought still walking from left to right). While the movement is great, it skipped the "approach" and "pause midway" part of the prompt.

### 2. Veo 3.1 (in Runway) (Multiple References)

Google's Veo 3.1 model was tested via Runway, which also allows for semantic reference inputs.

<video controls autoplay loop muted playsinline>
  <source src="/The-Latent-Playbook/assets/videos/character-consistency-benchmark/runway-veo-3.1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

**Observations:**
* **Strengths:** Veo 3.1 demonstrated great logic and physics. It was the only model that successfully followed the *entire* sequence: seeing the woman walk up to the bridge, correctly passing *in-between* the flanking trees (handling occlusion), turning, and then leaning. The character resemblance is accecptable (more on the clothing, less so on the face).
* **Weaknesses:** The "cinematography" is a bit sterile compared to Kling; the camera shot is straightforward and a little dull. The final action (looking down) felt slightly stiff and robotic compared to Kling's natural fluidity. The character's face also drifts a bit during the looking down action, losing a little identity.

### 3. Hailuo 2.3 (Start Frame)

For Hailuo, we used the synthesized start frame (Image 4) as the input.

<video controls autoplay loop muted playsinline>
  <source src="/The-Latent-Playbook/assets/videos/character-consistency-benchmark/hailuo-2.3.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

**Observations:**
* **Strengths:** It technically fulfilled the prompt, and the video generation is stable.
* **Weaknesses:** The result is somewhat underwhelming. The scene feels static compared to the multi-reference models. Crucially, the model hallucinated a "turn away" movement, having the character turn her back to the audience to lean. This avoids rendering the complex facial angle but fails the "character consistency" test because we lose sight of the subject.

### 4. Runway Gen-4 (Start Frame)

Using the same start frame workflow as Hailuo.

<video controls autoplay loop muted playsinline>
  <source src="/The-Latent-Playbook/assets/videos/character-consistency-benchmark/runway-gen-4.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

**Observations:**
* **Strengths:** The first second of generation is very high quality and matches the start frame perfectly.
* **Weaknesses:** Identity drift sets in quickly. As the character moves, the face begins to morph, losing the likeness of the reference woman. Furthermore, it failed to execute the specific "leaning" action.

### 5. Hunyuan 1.5 (Start Frame)

We also tested the open-source model Hunyuan 1.5 using the start frame method.

<video controls autoplay loop muted playsinline>
  <source src="/The-Latent-Playbook/assets/videos/character-consistency-benchmark/hunyuan-1.5.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

**Observations:**
* **Strengths:** The character remained mostly consistent for the first 2-3 seconds, which is a strong showing for an open-source model. The camera movements were acceptable.
* **Weaknesses:** Some fine details, particularly on the hair texture, were lost compared to the proprietary giants. It also failed to execute the complex "leaning hands" and "looking down" interaction, struggling with the physical contact between the character and the railing.

## Conclusion

This was a quick, "one-shot" benchmark, so it's important not to draw definitive conclusions about the maximum capabilities of these models: rerolling or tweaking parameters could yield better results. However, a few patterns emerged from this test:

1.  **Multi-Reference Advantage:** The models that allowed us to input separate Character and Scene references (Kling O1 and Veo 3.1) seemed to produce more dynamic and physically grounded results than those relying on a single synthesized start frame.
2.  **Physics vs. Aesthetics:** **Veo 3.1** stood out for its logical understanding of the scene (walking *between* trees), while **Kling O1** offered the most natural human movement and aesthetic lighting.
3.  **The Open Source Gap:** **Hunyuan 1.5** put up a respectable fight regarding consistency, though it (along with Hailuo and Gen-4) struggled with the complex physical interaction of leaning.

If you are looking for pure visual impact with great character consistency, Kling O1 is a strong contender. For complex interactions, models with robust physics understanding like Veo 3.1 seem promising. As always, the "best" tool depends entirely on the specific shot you need.