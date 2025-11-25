---
title: 'A Chronicle of Video-making AIs'
description: 'Exploring the evolution and impact of generative video-making AI models & Tools.'
category: 'World Building & Style'
publishDate: '2025-09-18'
lastUpdated: '2025-11-18'
author: 'Yuguang Zhang'
authorUrl: 'https://www.ygzhang.com'
heroMedia: '/The-Latent-Playbook/assets/videos/chronicle-of-video-making-AI/hero.jpg'
difficulty: 'beginner'
tags:
  - video-AI
  - animation
---

## Introduction

Text-to-video AI has moved from research labs to browser tabs in just a few years. Today, you can type a prompt like “a rainy cyberpunk street filmed on 16mm” and get a short video that looks surprisingly close to something from a music video or film title sequence.

This chronicle walks through that journey: from early, flickery GAN videos, to the diffusion-era “Colab notebook animations,” to today’s dedicated text-to-video models like Sora, Veo, and the booming open-source wave led by HunyuanVideo, LTX, Wan and others. The goal is not to list every model, but to trace how ideas and tools evolved, and what that means for people who want to make moving images with AI.

---

## 1. Early Experiments: GAN Videos That Almost Worked

The first wave of AI video generation grew out of GAN research in the mid-to-late 2010s. Models like VGAN and MoCoGAN tried to extend image GANs into time, generating short clips instead of single frames.

They *worked* in the sense that motion appeared, but the limitations were obvious:  
- Very low resolution  
- Jittery motion and “popping” artifacts between frames  
- Short clip lengths (often just a couple of seconds)

These systems were important proof-of-concepts: they showed that a neural network could, in principle, learn to generate both appearance *and* motion. But they weren’t yet practical tools for artists or filmmakers.

Examples of <a href="https://github.com/snap-research/MoCoGAN-HD">MoCoGAN-HQ</a> outputs:

![MoCoGAN-HQ Example 1](/The-Latent-Playbook/assets/videos/chronicle-of-video-making-AI/AFHQ.gif)
![MoCoGAN-HQ Example 2](/The-Latent-Playbook/assets/videos/chronicle-of-video-making-AI/FFHQ_1024.gif)
---

## 2. Diffusion Era: From Text-to-Image to DIY Video

The real shift started when diffusion models and CLIP-style language–image encoders took off around 2021. Tools like DALL·E, Imagen and Stable Diffusion showed that we could generate detailed, coherent images directly from text prompts.

Naturally, people asked: *what if we do this for every frame of a video?*

Two community tools became iconic in this phase:

- **Disco Diffusion** – A Google Colab notebook that combined CLIP guidance with diffusion models to generate trippy, painterly animations from text prompts. Creators specified camera paths, keyframe prompts, and let it render frame-by-frame.  
- **Deforum for Stable Diffusion** – A later ecosystem built around Stable Diffusion that made it easier to animate prompts, interpolate in latent space, and create smooth morphing sequences from text or images.

Disco Diffusion Animation by <a href="https://www.artstation.com/seedmole" target="_blank">Seedmole</a>:

![Disco Diffusion Example 1](/The-Latent-Playbook/assets/videos/chronicle-of-video-making-AI/discodiffusion-seedmole-1.gif)

Deforum Animation from Deforum's <a href="https://x.com/deforum_art" target="_blank">official account</a>:

![Deforum Example 1](/The-Latent-Playbook/assets/videos/chronicle-of-video-making-AI/deforum.gif)

These approaches were still “hacks” on top of image models: each frame was generated separately, then stitched into a video. With careful settings, you could get beautiful results—but you could also get flicker, warping, and characters that constantly changed shape.

---

## 3. Specialized Video Models: Learning Motion Explicitly

By 2023, researchers started asking: instead of bending image models into video tools, what if we explicitly teach the model about time?

A good example is **AnimateDiff**, which introduces a *motion module* trained on short video clips and then plugs that module into existing Stable Diffusion–style image models. The core image model stays frozen, preserving its style and visual quality, while the motion module learns how things should move over time.

The result:  
- Smoother, more coherent motion  
- Better temporal consistency compared to pure frame-by-frame tricks  
- The ability to “animate” any compatible image checkpoint in a similar way

This marks a conceptual pivot: video generation is no longer just “many images in a row,” but a joint model of space *and* time.

Examples of AnimateDiff animations by <a href="makeitrad" target="_blank">makeitrad</a>:

<video controls autoplay loop muted playsinline>
  <source src="/The-Latent-Playbook/assets/videos/chronicle-of-video-making-AI/animatediff-1.mp4" type="video/mp4" />
  Your browser does not support the video tag. 
</video>

<video controls autoplay loop muted playsinline>
  <source src="/The-Latent-Playbook/assets/videos/chronicle-of-video-making-AI/animatediff-2.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## 4. The Text-to-Video Era: Sora, Make-A-Video, Imagen Video & Runway

Around 2022–2023, the first headline-grabbing text-to-video models appeared:

- **Meta’s Make-A-Video** (2022) extended text-to-image diffusion to short, prompt-driven video clips. It learned appearance from image–text data and motion from unlabeled video.  
- **Google’s Imagen Video** (2022) used a cascade of diffusion models to generate HD videos from text, with specialized temporal and spatial super-resolution stages.  
- **Runway Gen-1 & Gen-2** (2023) brought these ideas into a creator-friendly product. Gen-1 focused on video-to-video (restyling existing footage), while Gen-2 added fully text-to-video generation accessible through a simple web interface.

Then, in 2024–2025, **OpenAI’s Sora** pushed the quality bar higher again. Sora can generate videos up to a minute long while maintaining high visual fidelity and close alignment with the prompt, and later releases integrated it into products like the Sora app and Bing Video Creator. For many viewers, Sora clips—especially cityscapes, landscapes, and cinematic camera moves—looked alarmingly close to real footage, sparking both excitement and concern.

At this stage, text-to-video moved from “experimental demo” to a new medium for creative work, marketing, prototyping, and speculation.

Examples of Sora-generated videos from OpenAI's <a href="https://x.com/OpenAI" target="_blank">official account</a>:

<video controls autoplay loop muted playsinline>
  <source src="/The-Latent-Playbook/assets/videos/chronicle-of-video-making-AI/sora-1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<video controls autoplay loop muted playsinline>
  <source src="/The-Latent-Playbook/assets/videos/chronicle-of-video-making-AI/sora-2.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## 5. Open-Source Wave: HunyuanVideo, LTX, Wan & Friends

In parallel, an open-source ecosystem exploded:

- **HunyuanVideo** by Tencent was released as a large open-source text-to-video model (13B parameters in early versions). It aims to match or surpass leading closed-source models, and is available both as research code and as easy-to-run pipelines.  
- **LTX-Video / LTXV** from Lightricks focuses on *speed*. The model can generate high-quality videos at real-time or near-real-time rates, with open-source code and training tools for fine-tuning.  
- **Wan** (and the Wan 2.x family) from Alibaba/ Wan-AI is a suite of powerful open-source video models. The 14B-parameter text-to-video model aims for state-of-the-art quality among both open and closed models and supports multilingual text and higher resolutions.

The pattern is clear: what started as closed, lab-only tech is rapidly being re-implemented, optimized, and shared in open ecosystems. This dramatically lowers the barrier for artists, indie devs, and researchers to experiment, remix, and build their own tools.

Examples of Wan 2.2 by <a href="https://x.com/fal" target="_blank">Fal.ai</a> and <a href="https://x.com/fofrAI" target="_blank">Fofr</a>:

<video controls autoplay loop muted playsinline>
  <source src="/The-Latent-Playbook/assets/videos/chronicle-of-video-making-AI/wan-1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<video controls autoplay loop muted playsinline>
  <source src="/The-Latent-Playbook/assets/videos/chronicle-of-video-making-AI/wan-2.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## 6. Where Things Might Be Going

Looking ahead, several trends are likely:

- **Longer, more coherent stories** – Better temporal modeling will extend clip lengths while keeping characters and environments consistent.  
- **Higher fidelity & resolution** – 1080p and 4K, higher frame rates, and fewer strange artifacts.  
- **Multimodal by default** – Video, audio, and text generated together: dialogue, sound design, and image all driven by a single prompt or script.  
- **More control for creators** – Fine-tuning models on custom footage, controlling camera moves, editing timelines, and combining AI clips with traditional editing tools.  
- **Stronger governance & ethics** – Guardrails against deepfakes, clearer consent for training data, and better tools for watermarking and provenance.

For now, we’re living through a strange and exciting moment: the grammar of cinema is being re-learned by machines, and the “video editor” is slowly becoming something you can talk to.