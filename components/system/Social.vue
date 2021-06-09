<template>
    <div class="social">
        <ul class="social__list">
            <li class="social__item" @mouseover="$emit('showCursive', $event)" @mouseleave="$emit('hideCursive', $event)">
                <a href="https://www.facebook.com/IQOSA/" class="social__link">Facebook,</a>
                <a href="https://www.facebook.com/IQOSA/" class="social__link social__link--cursive">Facebook,</a>
            </li>
            <li class="social__item" @mouseover="$emit('showCursive', $event)" @mouseleave="$emit('hideCursive', $event)">
                <a href="https://www.pinterest.com/iqosa/_created/" class="social__link">Pinterest,</a>
                <a href="https://www.pinterest.com/iqosa/_created/" class="social__link social__link--cursive">Pinterest,</a>
            </li>
            <li class="social__item" @mouseover="$emit('showCursive', $event)" @mouseleave="$emit('hideCursive', $event)">
                <a href="https://www.instagram.com/iqosa/" class="social__link">Instagram</a>
                <a href="https://www.instagram.com/iqosa/" class="social__link social__link--cursive">Instagram</a>
            </li>
        </ul>
    </div>
</template>