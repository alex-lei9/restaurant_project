<template>
    <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>
    </v-container>
<v-container>
<v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in menuItems" :key="item">
                    <v-card>
                        <v-card color="yellow">
                            <v-card-item>
                                <v-card-title>{{ item.name }}</v-card-title>

                                <v-card-subtitle>{{item.description}}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" src="https://www.freepik.com/free-photo/side-view-french-fries-with-seasoning_8196330.htm#fromView=search&page=1&position=28&uuid=040d38f7-7c2e-4986-9c8c-0a3c2a26e1c4&query=fries" cover ></v-img>

                            <v-card-text>
                            {{ item.price }}
                            </v-card-text>
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>
            </v-container>

</v-card>
</v-container>
</template>
<script setup>
const menuItems = [
    {
        name: "Chips",
        price: 200,
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "https://www.freepik.com/free-photo/side-view-french-fries-with-seasoning_8196330.htm#fromView=search&page=1&position=28&uuid=040d38f7-7c2e-4986-9c8c-0a3c2a26e1c4&query=fries"
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8"
    }
]

</script>