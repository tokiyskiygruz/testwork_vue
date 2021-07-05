<template>
    <div class="navBar">
        <div class="navBar__profile_icon">
            <img src="@/assets/icons/profileIcon.svg" >
        </div>
        <div class="navBar__info">
            <span>
                ילארשי לארשי ןכוס םש
            </span>
            <span>
                123456 רפסמ
            </span>
            <span class="navBar__text-mobile">השמ םייח ,םולש</span>
        </div>

    </div>
</template>

<script>
export default {
    name: 'McvTopBar',

}
</script>

<style lang="scss" scoped>
$greencolor: #009C41;
$orangecolor: #ffa500;


.navBar {
    display: flex;
    align-items: center;
    padding: 35px;
    .navBar__info {
        color: $greencolor;
        display: flex;
        font-size: 16px;
        flex-direction: column;
        .navBar__text-mobile {
            color: $orangecolor;
            display: none;
        }
    }
    .navBar__profile_icon {
        width: 38px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        padding: 1px;
        background-color: $greencolor;
        border-radius: 10px;
    }
    @media screen and (max-width: 768px) {
    .navBar__info {
        font-size: 10px;
        .navBar__text-mobile {
            display: contents;
        }

    }
    .navBar__profile_icon {
        margin-left: 10px;
    }
}
}
@media screen and (max-width: 768px) {
    .navBar {
        padding: 15px;
    }
}



</style>
