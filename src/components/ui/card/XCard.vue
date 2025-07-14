<template>
    <Card>
        <CardHeader>
            <CardTitle>
                <slot name="title">
                    {{ title }}
                </slot>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <slot>
                {{ content }}
            </slot>
        </CardContent>
        <CardFooter>
            <slot name="footer">
                {{ footer }}
            </slot>
        </CardFooter>
    </Card>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import CardContent from './CardContent.vue';
import CardDescription from './CardDescription.vue';
import CardFooter from './CardFooter.vue';
import CardHeader from './CardHeader.vue';
import CardTitle from './CardTitle.vue';

const props = defineProps<{
    title?: string;
    description?: string;
    content?: string;
    footer?: string;
}>();
</script>

<style scoped></style>