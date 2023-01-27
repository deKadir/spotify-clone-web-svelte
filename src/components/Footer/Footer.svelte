<script>
	import SvgInstagram from '../../assets/SvgInstagram.svelte';
	import SvgTwitter from '../../assets/SvgTwitter.svelte';
	import SvgFacebook from '../../assets/SvgFacebook.svelte';
</script>

<footer class="mt-12">
	<div class="flex flex-col lg:flex-row justify-start">
		<div class="flex gap-[100px]">
			<ul>
				<h1>Şirket</h1>
				<li><a href="#">Hakkında</a></li>
				<li><a href="#">Kariyer</a></li>
				<li><a href="#">For the Record</a></li>
			</ul>

			<ul>
				<h1>Topluluklar</h1>
				<li><a href="#">Sanat İçin</a></li>
				<li><a href="#">Geliştiriciler</a></li>
				<li><a href="#">Reklam</a></li>
				<li><a href="#">Yatırımcılar</a></li>
				<li><a href="#">Satıcılar</a></li>
			</ul>
		</div>
		<div class="flex lg:ml-[100px] justify-between flex-auto flex-col lg:flex-row">
			<ul>
				<h1>Yararlı bağlantılar</h1>
				<li><a href="#">Destek</a></li>
				<li><a href="#">Ücretsiz Mobil Uygulama</a></li>
			</ul>
			<div class="flex gap-4 items-start">
				<div class="social-icon">
					<SvgInstagram />
				</div>
				<div class="social-icon">
					<SvgTwitter />
				</div>
				<div class="social-icon">
					<SvgFacebook />
				</div>
			</div>
		</div>
	</div>
	<div class="border-t border-active my-7" />
	<div class="flex justify-between text-link text-sm items-center ">
		<div class="flex gap-5 my-5 footer-links">
			<a href="#">Yasal</a>
			<a href="#">Gizlilik Merkezi</a>
			<a href="#">Gizlilik Politikası</a>
			<a href="#">Tanımlama Bilgileri</a>
			<a href="#">Reklamlar Hakkında</a>
		</div>
		&copy; 2023 Spotify AB
	</div>
</footer>

<style>
	ul {
		@apply flex flex-col;
	}
	h1 {
		@apply font-semibold mb-2;
	}
	ul li a {
		@apply block mb-2 text-link duration-300;
	}
	ul li a:hover {
		@apply text-white underline;
	}
	.social-icon {
		@apply bg-active block p-3 rounded-full duration-300;
	}
	.social-icon:hover {
		@apply bg-link/50;
	}
	.footer-links a:hover {
		@apply text-white;
	}
</style>
