---
title: 'Character Animation with Wan 2.2 Animate'
description: 'Guide and experiments for animating a character using the Wan 2.2 Animate model.'
category: 'Motion & Animation'
publishDate: '2025-10-12'
lastUpdated: '2025-10-21'
author: 'Yuguang Zhang'
authorUrl: 'https://www.ygzhang.com'
heroMedia: '/assets/videos/character-animation-wan-animate/hero.jpg'
difficulty: 'intermediate'
tags:
  - ComfyUI
  - Wan 2.2 Animate
---

## Introduction

The AI animation community is buzzing with the recent open-source release of Wan 2.2 Animate, a powerful new model that is revolutionizing character animation. This tool allows creators to take a static character image and bring it to life using a reference video. It intelligently transfers the motion, expressions, and even subtle gestures from the performer in the video to the character, producing incredibly realistic and high-fidelity results.

<video controls autoplay loop muted playsinline>
  <source src="/assets/videos/character-animation-wan-animate/a-vs-a1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*A example clip showcasing character close-up expression transfer.*

What makes Wan 2.2 Animate so exciting is its unified framework. Unlike older methods that often required separate models for facial expressions and body movements, this model handles holistic replication in a single, streamlined process. This leap forward means more natural-looking animations and the ability to perform full head and body replacements that seamlessly integrate into existing footage. Its open-source nature has already led to rapid adoption and integration into popular workflows like ComfyUI, putting state-of-the-art animation capabilities into the hands of creators everywhere.




## Modes of Wan 2.2 Animate

Wan 2.2 Animate operates in two primary modes, giving you flexible control over the final output. The core inputs are the same for both—a character image and a reference video—but the results serve different creative purposes.

### 1. Animation Mode (Move / Pose Transfer)

This mode is designed to animate a static character from scratch. It isolates the character from your source image and applies the movements from the reference video, generating a brand new video clip of your character in action. Here we're experiment with animating two different characters, Zoey from Kpop Deamon Hunters, and Woody from Toy Story, using the same reference video.

<div class="video-grid">
  <video controls autoplay loop muted playsinline>
    <source src="/assets/videos/character-animation-wan-animate/p-vs-p1.mp4" type="video/mp4" />
  </video>
  <video controls autoplay loop muted playsinline>
    <source src="/assets/videos/character-animation-wan-animate/p-vs-p3.mp4" type="video/mp4" />
  </video>
</div>

Here's two more examples using a different reference video. Notice how the two characters retain their leaning postures from the reference video, even without the tree in the context. This is something to keep in mind when selecting reference footage.

<div class="video-grid">
  <video controls autoplay loop muted playsinline>
    <source src="/assets/videos/character-animation-wan-animate/q-vs-q1.mp4" type="video/mp4" />
  </video>
  <video controls autoplay loop muted playsinline>
    <source src="/assets/videos/character-animation-wan-animate/q-vs-q3.mp4" type="video/mp4" />
  </video>
</div>

Use Cases:

- Bringing an original character illustration or concept art to life.
- Creating animated sequences for social media, ads, or short films without needing complex rigging.
- Visualizing how a static character design would look with dynamic movements and expressions.

### 2. Replacement Mode (Mix / Character Replacement)
This mode swaps the character from your source image directly into the reference video, replacing the original performer. The model intelligently analyzes the scene's lighting and color to help your character blend in naturally. The background and environment from the original video are preserved.

Use Cases:

- Placing a fictional character or digital avatar into a live-action scene.
- Creating marketing content by having a brand mascot interact with real-world environments.
- Swapping actors in a video clip for creative storytelling or meme generation.



One thing to note is that the mask of the person in the reference video will have an impact on the final look of the character in the output. As seen in the examples below, the outfits of Woody and Zoey are altered to match the referenced person's outline, especially if the mask is very tight.

<div class="video-grid">
  <video autoplay loop muted playsinline>
    <source src="/assets/videos/character-animation-wan-animate/p-vs-p2.mp4" type="video/mp4" />
  </video>
  <video autoplay loop muted playsinline>
    <source src="/assets/videos/character-animation-wan-animate/p-vs-p4.mp4" type="video/mp4" />
  </video>
</div>

<div class="video-grid">
  <video autoplay loop muted playsinline>
    <source src="/assets/videos/character-animation-wan-animate/q-vs-q2.mp4" type="video/mp4" />
  </video>
  <video autoplay loop muted playsinline>
    <source src="/assets/videos/character-animation-wan-animate/q-vs-q4.mp4" type="video/mp4" />
  </video>
</div>

## Workflow Setup

Setting up Wan 2.2 Animate in ComfyUI involves installing specific custom nodes and downloading several model files. Using the ComfyUI Manager is highly recommended for installing the necessary nodes. Here we'll use the workflow made by <a href="https://www.youtube.com/@MDMZ" target="_blank" rel="noopener noreferrer">MDMZ</a> as an example, which you can find <a href="https://drive.google.com/file/d/10wPMkNCvEmqVc6p3rLSczk2TEx-rKxwQ/view" target="_blank" rel="noopener noreferrer">here</a>.

### Required Core Nodes

- WanAnimateToVideo: The core node that runs the Wan 2.2 Animate model.

### Required Custom Nodes
Install the following nodes using the ComfyUI Manager:

- ComfyUI-ComfyUI-KJNodes

- ComfyUI's ControlNet Auxiliary Preprocessors: Used for extracting the pose (OpenPose/DW Pose) from the reference video.

- ComfyUI-segment-anything-2: For generating masks if needed.

- ComfyUI-VideoHelperSuite (Optional): Provides essential nodes for loading, processing, and combining video frames if you don't want to use the default Save Video node.

### Required Models
You will need to download the following models and place them in the correct subfolders within your ComfyUI/models/ directory:

**diffusion_models**       
- [Wan2_2-Animate-14B_fp8_e4m3fn_scaled_KJ.safetensors](https://huggingface.co/Kijai/WanVideo_comfy_fp8_scaled/resolve/main/Wan22Animate/Wan2_2-Animate-14B_fp8_e4m3fn_scaled_KJ.safetensors)
- [wan2.2_animate_14B_bf16.safetensors](https://huggingface.co/Comfy-Org/Wan_2.2_ComfyUI_Repackaged/resolve/main/split_files/diffusion_models/wan2.2_animate_14B_bf16.safetensors)

**loras**
- [lightx2v_I2V_14B_480p_cfg_step_distill_rank64_bf16.safetensors](https://huggingface.co/Kijai/WanVideo_comfy/resolve/main/Lightx2v/lightx2v_I2V_14B_480p_cfg_step_distill_rank64_bf16.safetensors)
- [WanAnimate_relight_lora_fp16.safetensors](https://huggingface.co/Kijai/WanVideo_comfy/resolve/main/WanAnimate_relight_lora_fp16.safetensors)

**clip_visions**
- [clip_vision_h.safetensors](https://huggingface.co/Comfy-Org/Wan_2.1_ComfyUI_repackaged/resolve/main/split_files/clip_vision/clip_vision_h.safetensors)

**vae**
- [wan_2.1_vae.safetensors](https://huggingface.co/Comfy-Org/Wan_2.2_ComfyUI_Repackaged/resolve/main/split_files/vae/wan_2.1_vae.safetensors)

**text_encoders**   
- [umt5_xxl_fp8_e4m3fn_scaled.safetensors](https://huggingface.co/Comfy-Org/Wan_2.1_ComfyUI_repackaged/resolve/main/split_files/text_encoders/umt5_xxl_fp8_e4m3fn_scaled.safetensors)

And DW Pose Models.

You can find direct download links for these models on their respective Hugging Face repositories.

## Workflow Overview
The ComfyUI graph for Wan 2.2 Animate connects these nodes and models to process your inputs.

A typical workflow follows these steps:

- Specifying Width and Height:
<img src="/assets/videos/character-animation-wan-animate/comfy_width_height.png" alt="ComfyUI Workflow" style="width:20%;"/>

- Inputs: Use video loader to load your reference video and a standard Load Image node for your character image.
<img src="/assets/videos/character-animation-wan-animate/comfy_input.png" alt="ComfyUI Workflow" style="width:60%;"/>

- Preprocessing: The reference video is fed into the DWPreprocessor node, which analyzes the face and the body pose frame-by-frame and generates a skeleton sequence.

- Masking is needed for you want to do Mix Mode. You would need to feed the character mask and the background image to the WanAnimateToVideo node to enable Mix Mode.
<img src="/assets/videos/character-animation-wan-animate/comfy_mask.png" alt="ComfyUI Workflow" style="width:30%;"/>

- Model Loading: The Wan Animate model, Video VAE, and Relighting LoRA are loaded using their respective loaders.

- Animation Generation: The core WanAnimateToVideo node takes everything as input: the character image, the pose /face sequence, and the loaded models. Here you can select the length, whether you're continuing the motion from a previous sequence, and configure other parameters.

- Output: The generated image frames (latent) are decoded by the VAE and then combined into a final video file using a node like Save Video or VHS_VideoCombine.

This setup allows the model to accurately transfer the motion from the reference video to your character image, creating the final animation.

## Experiments - Facial Close-ups

For production-level application, facial expression transfer is usually a gold standard test. In my tests, while the head movement is pretty accurate, the nuances of the expressions are still a bit hit-or-miss. Below is a series of tests using classic movie scenes with strong emotional acting, as a showcase of its current capabilities / limitations. Here we use a generated middle-aged Asian female character as the source image to animate. Left: original footage, Right: Wan 2.2 Animate output.

<img src="/assets/videos/character-animation-wan-animate/woman_actor.png" alt="Character Image" style="width:50%;"/>

*Our generated actor character image*

<video controls autoplay loop muted playsinline>
  <source src="/assets/videos/character-animation-wan-animate/a-vs-a1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Tony Leung in "Infernal Affairs" (2002)*

<video controls autoplay loop muted playsinline>
  <source src="/assets/videos/character-animation-wan-animate/b-vs-b1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Cate Blanchett in "Blue Jasmine" (2013)*

<video controls autoplay loop muted playsinline>
  <source src="/assets/videos/character-animation-wan-animate/c-vs-c1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Al Pacino in "The Godfather" (1972)*

<video controls autoplay loop muted playsinline>
  <source src="/assets/videos/character-animation-wan-animate/d-vs-d1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Maggie Cheung in "Comrades: Almost a Love Story" (1996)*


In general, the model seems to struggle with subtle expressions, or adding micro-expressions that were not present in the original footage. It also tends to produce more generic or neutral expressions rather than replicating the nuanced emotions of the original actor. In order to achieve more accurate facial expression transfer, you'd need some careful selection of reference footage and possibly some post-processing.

## Resources

- [Wan 2.2 GitHub Repository](https://github.com/Wan-Video/Wan2.2)
- [Hugging Face - Wan 2.2 Animate Model](https://huggingface.co/Wan-AI/Wan2.2-Animate-14B)

