<div class="socials">
    <Fa class=icon icon={faEnvelope} color={iconColor}/>
    <Fa class=icon icon={faDiscord} color={iconColor}/>
    <Fa class=icon icon={faGithub} color={iconColor}/>
    <Fa class=icon icon={faStackOverflow} color={iconColor}/>
    <Fa class=icon icon={faCodepen} color={iconColor}/>
    <!-- <Fa class=icon icon={faSlack} color={iconColor}/> -->
</div>

<script>
    import Fa from "svelte-fa"

    import {faCodepen, faDiscord, faGithub, faStackOverflow} from "@fortawesome/free-brands-svg-icons"
    import {faEnvelope}  from "@fortawesome/free-solid-svg-icons"

    import { onMount } from "svelte";

    import gsap from "gsap"

    var iconColor = 123;

    onMount(() => {
        // var tween = gsap.to(".icon",{autoCSS:false,scale:2,color:"#39ff14", duration:1});
        // tween.play();
    });

</script>

<style>
    .socials{
        padding-top: 30vh;

        display:flex;

        gap:4vw;
        justify-content: center;

        width:100vw;
    }

    :global(.icon){
        transition:300ms;
    }

    :global(.icon:hover){
        scale:2;
        transition:150ms;
    }
</style>