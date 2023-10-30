<div class="socials">
    <Fa class=icon scale=1x icon={faEnvelope} color=white/>
    <Fa class=icon icon={faDiscord} color=white/>
    <Fa class=icon icon={faGithub} color=white/>
    <Fa class=icon icon={faStackOverflow} color=white/>
    <Fa class=icon icon={faCodepen} color=white/>
</div>

<script>
    import Fa from "svelte-fa"

    import {faCodepen, faDiscord, faGithub, faStackOverflow} from "@fortawesome/free-brands-svg-icons"
    import {faEnvelope}  from "@fortawesome/free-solid-svg-icons"

    import { onMount } from "svelte";

    import gsap from "gsap"

    onMount(() => {
        gsap.utils.toArray(".icon").forEach((icon,i) => {
            var tween = gsap.to(icon.querySelectorAll("path"),{
                paused:true,
                fill:"#5865F2",
                scale:1.5,
                transformOrigin:"center"
            });

            icon.addEventListener("mouseenter", () => tween.play());
            icon.addEventListener("mouseleave", () => tween.reverse());
        });
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
</style>