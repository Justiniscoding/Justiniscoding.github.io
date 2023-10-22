<div class="socials">
    <Fa class=icon icon={faStackOverflow} color=#fff/>
    <Fa class=icon icon={faGithub} color=#fff/>
    <Fa class=icon icon={faCodepen} color=#fff/>
    <Fa class=icon icon={faSlack} color=#fff/>
</div>

<script>
    import Fa from "svelte-fa"
    import {faCodepen, faGithub, faSlack, faStackOverflow} from "@fortawesome/free-brands-svg-icons"
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
        transition:100ms;
    }
</style>