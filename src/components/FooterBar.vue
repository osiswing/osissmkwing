<template>
    <div class="w-full relative h-[45vh] overflow-hidden">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="wave wave3"></div>
    </div>
    
    <footer class="bg-[#222D56] grid footer text-white ">
        <!-- footer content -->

            <div>
                <div class="flex items-center mb-6">
                    <img src="../assets/osis-wing.png" alt="" class="w-14">
                    <h1 class="ml-4 ">OSIS SMK WIN-G</h1>
                </div>
                <p class="mb-6 text-sm">Jl. Raya Kalapannunggal km 07 Kp. Pamatutan Rt. 57/23 Desa Sundawenang, Kec. Parungkuda, Kab. Sukabumi, Jawa Barat 43357</p>
                <div class="icon-content">
                    <a href="#"><i class="bx bxl-instagram-alt"></i></a>
                    <a href="#"><i class="bx bxl-github"></i></a>
                    <a href="#"><i class="bx bxl-whatsapp"></i></a>
                    <a href="#"><i class="bx bxl-youtube"></i></a>
                </div>
            </div>
    
            <div class="">
                <h1 class="mb-6 py-4">Projects</h1>
                <li> <a href="#">Lorem</a></li>
                <li> <a href="#">Ipsum</a></li>
                <li> <a href="#">Dolor</a></li>
                <li> <a href="#">Sit Amet</a></li>
            </div>
    
            <div>
                <h1 class="mb-6 py-4">Quick Links</h1>
                <li><router-link class="nav-menu" to="/">Home</router-link></li>
                <li><router-link class="nav-menu" to="/sekbid">Sekbid</router-link></li>
                <li><router-link class="nav-menu" to="/gallery">Gallery</router-link></li>
                <li><router-link class="nav-menu" to="/about">About</router-link></li>
            </div>

            <div class="copyright text-center text-xs">
                <p><i class="bx bx-copyright"></i> Copyright <span class="font-semibold">OSIS SMK WIN-G</span> 2024</p>
            </div>
        </footer>

</template>
<script>
export default {
    name: "FooterBar"
}
</script>

<style>

</style>