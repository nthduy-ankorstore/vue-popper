<template>
  <div class="columns box">
    <div class="column is-8">
      <pre
        class="rich-diff-level-zero"
      ><code class="language-html" data-lang="html">&lt;<span class="pl-ent rich-diff-level-one">popper</span> <span
        class="pl-e rich-diff-level-one">trigger</span>=<span class="pl-s rich-diff-level-one"><span
        class="pl-pds">"</span>hover<span class="pl-pds">"</span></span> :<span
        class="pl-e rich-diff-level-one">options</span>=<span class="pl-s rich-diff-level-one"><span
        class="pl-pds">"</span>{placement: 'left'}<span class="pl-pds">"</span></span>&gt;
  &lt;<span class="pl-ent rich-diff-level-one">div</span> <span class="pl-e rich-diff-level-one">class</span>=<span
          class="pl-s rich-diff-level-one"><span class="pl-pds">"</span>popper<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent rich-diff-level-one">div</span>&gt;
      &lt;<span class="pl-ent rich-diff-level-one">b</span>&gt;Title&lt;/<span
          class="pl-ent rich-diff-level-one">b</span>&gt;
    &lt;/<span class="pl-ent rich-diff-level-one">div</span>&gt;
    &lt;<span class="pl-ent rich-diff-level-one">img</span> <span class="pl-e rich-diff-level-one">src</span>=<span
          class="pl-s rich-diff-level-one"><span
          class="pl-pds">"</span>https://placeholdit.imgix.net/~text?txtsize=20<span class="pl-ii">&amp;</span>txt=100%C3%97100<span
          class="pl-ii">&amp;</span>w=100<span class="pl-ii">&amp;</span>h=100<span class="pl-pds">"</span></span> <span
          class="pl-e rich-diff-level-one">alt</span>=<span class="pl-s rich-diff-level-one"><span
          class="pl-pds">"</span><span class="pl-pds">"</span></span> <span
          class="pl-e rich-diff-level-one">align</span>=<span class="pl-s rich-diff-level-one"><span
          class="pl-pds">"</span>left<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent rich-diff-level-one">span</span> <span class="pl-e rich-diff-level-one">class</span>=<span
          class="pl-s rich-diff-level-one"><span class="pl-pds">"</span>popper-content<span
          class="pl-pds">"</span></span>&gt;Popper Content&lt;/<span class="pl-ent rich-diff-level-one">span</span>&gt;
  &lt;/<span class="pl-ent rich-diff-level-one">div</span>&gt;

  &lt;<span class="pl-ent rich-diff-level-one">a</span> <span class="pl-e rich-diff-level-one">class</span>=<span
          class="pl-s rich-diff-level-one"><span class="pl-pds">"</span>button is-primary<span
          class="pl-pds">"</span></span> <span class="pl-e rich-diff-level-one">slot</span>=<span
          class="pl-s rich-diff-level-one"><span class="pl-pds">"</span>reference<span class="pl-pds">"</span></span>&gt;
    Left
  &lt;/<span class="pl-ent rich-diff-level-one">a</span>&gt;
&lt;/<span class="pl-ent rich-diff-level-one">popper</span>&gt;</code></pre>
    </div>
    <div class="column">
      <popper trigger="clickToToggle" :options="{ placement: 'left' }">
        <div class="popper">
          <div>
            <b>Title</b>
          </div>
          <img
            src="https://placeholdit.imgix.net/~text?txtsize=20&txt=100%C3%97100&w=100&h=100"
            alt=""
            align="left"
          />
          <span class="popper-content">Popper Content</span>
        </div>
        <template #reference>
            <button class="button is-primary" > Left </button>
        </template>
      </popper>
    </div>
  </div>

  <div class="columns box">
    <div class="column is-8">
      <pre
        class="rich-diff-level-zero"
      ><code class="language-html" data-lang="html">&lt;<span class="pl-ent rich-diff-level-one">popper</span> <span
        class="pl-e rich-diff-level-one">trigger</span>=<span class="pl-s rich-diff-level-one"><span
        class="pl-pds">"</span>hover<span class="pl-pds">"</span></span> :<span
        class="pl-e rich-diff-level-one">options</span>=<span class="pl-s rich-diff-level-one"><span
        class="pl-pds">"</span>{placement: 'right'}<span class="pl-pds">"</span></span>&gt;
  &lt;<span class="pl-ent rich-diff-level-one">div</span> <span class="pl-e rich-diff-level-one">class</span>=<span
          class="pl-s rich-diff-level-one"><span class="pl-pds">"</span>popper<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent rich-diff-level-one">div</span>&gt;
      &lt;<span class="pl-ent rich-diff-level-one">b</span>&gt;Title&lt;/<span
          class="pl-ent rich-diff-level-one">b</span>&gt;
    &lt;/<span class="pl-ent rich-diff-level-one">div</span>&gt;
    &lt;<span class="pl-ent rich-diff-level-one">img</span> <span class="pl-e rich-diff-level-one">src</span>=<span
          class="pl-s rich-diff-level-one"><span
          class="pl-pds">"</span>https://placeholdit.imgix.net/~text?txtsize=20<span class="pl-ii">&amp;</span>txt=100%C3%97100<span
          class="pl-ii">&amp;</span>w=100<span class="pl-ii">&amp;</span>h=100<span class="pl-pds">"</span></span> <span
          class="pl-e rich-diff-level-one">alt</span>=<span class="pl-s rich-diff-level-one"><span
          class="pl-pds">"</span><span class="pl-pds">"</span></span> <span
          class="pl-e rich-diff-level-one">align</span>=<span class="pl-s rich-diff-level-one"><span
          class="pl-pds">"</span>left<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent rich-diff-level-one">span</span> <span class="pl-e rich-diff-level-one">class</span>=<span
          class="pl-s rich-diff-level-one"><span class="pl-pds">"</span>popper-content<span
          class="pl-pds">"</span></span>&gt;Popper Content&lt;/<span class="pl-ent rich-diff-level-one">span</span>&gt;
  &lt;/<span class="pl-ent rich-diff-level-one">div</span>&gt;

  &lt;<span class="pl-ent rich-diff-level-one">a</span> <span class="pl-e rich-diff-level-one">class</span>=<span
          class="pl-s rich-diff-level-one"><span class="pl-pds">"</span>button is-primary<span
          class="pl-pds">"</span></span> <span class="pl-e rich-diff-level-one">slot</span>=<span
          class="pl-s rich-diff-level-one"><span class="pl-pds">"</span>reference<span class="pl-pds">"</span></span>&gt;
    Right
  &lt;/<span class="pl-ent rich-diff-level-one">a</span>&gt;
&lt;/<span class="pl-ent rich-diff-level-one">popper</span>&gt;</code></pre>
    </div>
    <div class="column">
      <popper trigger="hover" :options="{ placement: 'right' }">
        <div class="popper">
          <div>
            <b>Title</b>
          </div>
          <img
            src="https://placeholdit.imgix.net/~text?txtsize=20&txt=100%C3%97100&w=100&h=100"
            alt=""
            align="left"
          />
          <span class="popper-content">Popper Content</span>
        </div>

        <a class="button is-primary" slot="reference"> Right </a>
      </popper>
    </div>
  </div>

  <div class="columns box">
    <div class="column is-8">
      <pre
        class="rich-diff-level-zero"
      ><code class="language-html" data-lang="html">&lt;<span class="pl-ent rich-diff-level-one">popper</span> <span
        class="pl-e rich-diff-level-one">trigger</span>=<span class="pl-s rich-diff-level-one"><span
        class="pl-pds">"</span>hover<span class="pl-pds">"</span></span> :<span
        class="pl-e rich-diff-level-one">options</span>=<span class="pl-s rich-diff-level-one"><span
        class="pl-pds">"</span>{placement: 'top'}<span class="pl-pds">"</span></span>&gt;
  &lt;<span class="pl-ent rich-diff-level-one">div</span> <span class="pl-e rich-diff-level-one">class</span>=<span
          class="pl-s rich-diff-level-one"><span class="pl-pds">"</span>popper<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent rich-diff-level-one">div</span>&gt;
      &lt;<span class="pl-ent rich-diff-level-one">b</span>&gt;Title&lt;/<span
          class="pl-ent rich-diff-level-one">b</span>&gt;
    &lt;/<span class="pl-ent rich-diff-level-one">div</span>&gt;
    &lt;<span class="pl-ent rich-diff-level-one">img</span> <span class="pl-e rich-diff-level-one">src</span>=<span
          class="pl-s rich-diff-level-one"><span
          class="pl-pds">"</span>https://placeholdit.imgix.net/~text?txtsize=20<span class="pl-ii">&amp;</span>txt=100%C3%97100<span
          class="pl-ii">&amp;</span>w=100<span class="pl-ii">&amp;</span>h=100<span class="pl-pds">"</span></span> <span
          class="pl-e rich-diff-level-one">alt</span>=<span class="pl-s rich-diff-level-one"><span
          class="pl-pds">"</span><span class="pl-pds">"</span></span> <span
          class="pl-e rich-diff-level-one">align</span>=<span class="pl-s rich-diff-level-one"><span
          class="pl-pds">"</span>left<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent rich-diff-level-one">span</span> <span class="pl-e rich-diff-level-one">class</span>=<span
          class="pl-s rich-diff-level-one"><span class="pl-pds">"</span>popper-content<span
          class="pl-pds">"</span></span>&gt;Popper Content&lt;/<span class="pl-ent rich-diff-level-one">span</span>&gt;
  &lt;/<span class="pl-ent rich-diff-level-one">div</span>&gt;

  &lt;<span class="pl-ent rich-diff-level-one">a</span> <span class="pl-e rich-diff-level-one">class</span>=<span
          class="pl-s rich-diff-level-one"><span class="pl-pds">"</span>button is-primary<span
          class="pl-pds">"</span></span> <span class="pl-e rich-diff-level-one">slot</span>=<span
          class="pl-s rich-diff-level-one"><span class="pl-pds">"</span>reference<span class="pl-pds">"</span></span>&gt;
    Top
  &lt;/<span class="pl-ent rich-diff-level-one">a</span>&gt;
&lt;/<span class="pl-ent rich-diff-level-one">popper</span>&gt;</code></pre>
    </div>
    <div class="column">
      <popper trigger="hover" :options="{ placement: 'top' }">
        <div class="popper">
          <div>
            <b>Title</b>
          </div>
          <img
            src="https://placeholdit.imgix.net/~text?txtsize=20&txt=100%C3%97100&w=100&h=100"
            alt=""
            align="left"
          />
          <span class="popper-content">Popper Content</span>
        </div>

        <a class="button is-primary" slot="reference"> Top </a>
      </popper>
    </div>
  </div>

  <div class="columns box">
    <div class="column is-8">
      <pre
        class="rich-diff-level-zero"
      ><code class="language-html" data-lang="html">&lt;<span class="pl-ent rich-diff-level-one">popper</span> <span
        class="pl-e rich-diff-level-one">trigger</span>=<span class="pl-s rich-diff-level-one"><span
        class="pl-pds">"</span>hover<span class="pl-pds">"</span></span> :<span
        class="pl-e rich-diff-level-one">options</span>=<span class="pl-s rich-diff-level-one"><span
        class="pl-pds">"</span>{placement: 'bottom'}<span class="pl-pds">"</span></span>&gt;
  &lt;<span class="pl-ent rich-diff-level-one">div</span> <span class="pl-e rich-diff-level-one">class</span>=<span
          class="pl-s rich-diff-level-one"><span class="pl-pds">"</span>popper<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent rich-diff-level-one">div</span>&gt;
      &lt;<span class="pl-ent rich-diff-level-one">b</span>&gt;Title&lt;/<span
          class="pl-ent rich-diff-level-one">b</span>&gt;
    &lt;/<span class="pl-ent rich-diff-level-one">div</span>&gt;
    &lt;<span class="pl-ent rich-diff-level-one">img</span> <span class="pl-e rich-diff-level-one">src</span>=<span
          class="pl-s rich-diff-level-one"><span
          class="pl-pds">"</span>https://placeholdit.imgix.net/~text?txtsize=20<span class="pl-ii">&amp;</span>txt=100%C3%97100<span
          class="pl-ii">&amp;</span>w=100<span class="pl-ii">&amp;</span>h=100<span class="pl-pds">"</span></span> <span
          class="pl-e rich-diff-level-one">alt</span>=<span class="pl-s rich-diff-level-one"><span
          class="pl-pds">"</span><span class="pl-pds">"</span></span> <span
          class="pl-e rich-diff-level-one">align</span>=<span class="pl-s rich-diff-level-one"><span
          class="pl-pds">"</span>left<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent rich-diff-level-one">span</span> <span class="pl-e rich-diff-level-one">class</span>=<span
          class="pl-s rich-diff-level-one"><span class="pl-pds">"</span>popper-content<span
          class="pl-pds">"</span></span>&gt;Popper Content&lt;/<span class="pl-ent rich-diff-level-one">span</span>&gt;
  &lt;/<span class="pl-ent rich-diff-level-one">div</span>&gt;

  &lt;<span class="pl-ent rich-diff-level-one">a</span> <span class="pl-e rich-diff-level-one">class</span>=<span
          class="pl-s rich-diff-level-one"><span class="pl-pds">"</span>button is-primary<span
          class="pl-pds">"</span></span> <span class="pl-e rich-diff-level-one">slot</span>=<span
          class="pl-s rich-diff-level-one"><span class="pl-pds">"</span>reference<span class="pl-pds">"</span></span>&gt;
    Bottom
  &lt;/<span class="pl-ent rich-diff-level-one">a</span>&gt;
&lt;/<span class="pl-ent rich-diff-level-one">popper</span>&gt;</code></pre>
    </div>
    <div class="column">
      <popper trigger="hover" :options="{ placement: 'bottom' }">
        <div class="popper">
          <div>
            <b>Title</b>
          </div>
          <img
            src="https://placeholdit.imgix.net/~text?txtsize=20&txt=100%C3%97100&w=100&h=100"
            alt=""
            align="left"
          />
          <span class="popper-content">Popper Content</span>
        </div>

        <a class="button is-primary" slot="reference"> Bottom </a>
      </popper>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import VuePopper from "../src/index";

export default defineComponent({
  components: {
    popper: VuePopper,
  },
});
</script>
