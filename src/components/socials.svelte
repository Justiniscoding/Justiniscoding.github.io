<div class="socials">
    <a href="mailto:nanxnan@proton.me">
        <Fa class=icon scale=1x icon={faEnvelope} color=white/>
    </a>
    <a href="https://discordapp.com/users/953044340631011379">
        <Fa class=icon icon={faDiscord} color=white/>
    </a>
    <a href="https://github.com/justiniscoding">
        <Fa class=icon icon={faGithub} color=white/>
    </a>
    <a href="https://stackoverflow.com/users/14940054/justiniscoding">
        <Fa class=icon icon={faStackOverflow} color=white/>
    </a>
    <a href="https://codepen.io/Justiniscoding-the-looper">
        <Fa class=icon icon={faCodepen} color=white/>
    </a>
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
                fill:getIconColorFromIndex(i),
                scale:1.5,
                transformOrigin:"center",
                duration:0.25
            });

            icon.addEventListener("mouseenter", () => {
                tween.timeScale(1);
                tween.play();
            });
            icon.addEventListener("mouseleave", () => {
                tween.timeScale(0.5);
                tween.reverse();
            });
        });
    });

    function getIconColorFromIndex(index){
        switch (index) {
            case 0:
                return "#39ff14"
            case 1:
                return "#5865F2"
            case 3:
                return "#FF9900"
            default:
                return "white"
        }
    }

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