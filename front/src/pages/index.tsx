import * as Slick from "@webtools/slick-server";

export default {
	url: "/",
	template: "app",

	title: "Webtools App",

	styles: [
		"/styles/reset.css",
		"/styles/app/index.css",
	],
	scripts: [
		"/scripts/index.ts",
	],

	head: (
		<>
		</>
	),
	body: () => (
		<>
			<header>
				<a href="/">
					<img src="/assets/logo-removebg.png" alt="logo" width={32} height={32} />
				</a>
				<nav>
					<a href="#offers">Nos Offres</a>
					<a href="#realisations">Nos Réalisations</a>
					<a href="#process">Le Processus</a>
					<a href="#contact">Nous Contacter</a>
				</nav>
				<a href="#">Site Gratuit</a>
			</header>
			<section id="hero-section">
				<div id="hero-text">
					<div className="top-section-text">
						<hr />
						<p>Studio digital · Restauration</p>
					</div>
					<h1>
						Nous aidons les restaurants à <span>remplir</span> leurs tables grâce au <span>digital</span>.
					</h1>
					<p>Sites web, visibilité locale et outils sur mesure pensés exclusivement pour la restauration.</p>
					<div id="hero-buttons">
						<a href="/offers">
							Voir les offres
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-arrow-right-icon lucide-arrow-right"
							>
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
						</a>
						<a href="#">Demander un site gratuit</a>
					</div>
				</div>
				<div id="hero-photo"></div>
			</section>
			<section id="observation">
				<div id="observation-text">
					<div className="top-section-text">
						<hr />
						<p>Le constat</p>
					</div>
					<h2>
						Trop de restaurants restent <span>invisibles</span>.
					</h2>
					<div id="reasons">
						<div className="reason">
							<p>01</p>
							<h3>Pas ou peu de visibilité en ligne</h3>
						</div>
						<div className="reason">
							<p>02</p>
							<h3>Sites obsolètes ou inutiles</h3>
						</div>
						<div className="reason">
							<p>03</p>
							<h3>Réservations perdues</h3>
						</div>
						<div className="reason">
							<p>04</p>
							<h3>Manque de temps pour gérer le digital</h3>
						</div>
					</div>
				</div>
				<div id="observation-right">
					<div id="observation-photo"></div>
					<div id="observation-right-text">
						<div className="top-section-text">
							<hr />
							<p>Notre approche</p>
						</div>
						<div>
							<h3>Nous ne vendons pas des sites.</h3>
							<p>
								Nous créons des <span>outils qui génèrent des clients</span>.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section id="why-us">
				<div>
					<div className="top-section-text">
						<hr />
						<p>Pourquoi nous</p>
					</div>
					<h2>
						Ce qui nous <span>différencie</span>.
					</h2>
				</div>
				<div>
					<div>
						<h3>01</h3>
						<p>Spécialisé restauration</p>
						<span>Nous connaissons vos enjeux, vos clients et votre marché.</span>
					</div>
					<div>
						<h3>02</h3>
						<p>Livraison rapide</p>
						<span>Votre site en ligne en quelques jours, pas en quelques mois.</span>
					</div>
					<div>
						<h3>03</h3>
						<p>Pensé conversion</p>
						<span>Chaque élément optimisé pour transformer les visiteurs en clients.</span>
					</div>
					<div>
						<h3>04</h3>
						<p>Approche humaine</p>
						<span>Un accompagnement personnalisé du début à la fin.</span>
					</div>
				</div>
			</section>
			<section id="offers">
				<div id="top-offers">
					<div className="top-section-text">
						<hr />
						<p>Nos Offres</p>
					</div>
					<h2>
						Des <span>solutions</span> adaptées à vos <span>ambitions</span>.
					</h2>
				</div>
				<div id="offers-div">
					<div className="offer">
						<div>
							<h3>Visibilité Express</h3>
							<p>Pour les restaurants qui veulent être visibles rapidement.</p>
						</div>
						<div className="price-div">
							<span>À partir de</span>
							<p>
								590<span>€</span>
							</p>
						</div>
						<hr />
						<div className="functionality">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-check-icon lucide-check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								<p>Site one-page professionnel</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-check-icon lucide-check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								<p>Boutons d'action (réserver, appeler)</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-check-icon lucide-check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								<p>Google Maps + avis</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-check-icon lucide-check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								<p>Livraison en 72h</p>
							</div>
						</div>
						<div>
							<a href="#">
								Choisir
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-arrow-right-icon lucide-arrow-right"
								>
									<path d="M5 12h14" />
									<path d="m12 5 7 7-7 7" />
								</svg>
							</a>
						</div>
					</div>
					<div className="offer popular">
						<div>
							<h3>Premium Restaurant</h3>
							<p>Pour les établissements qui veulent passer un cap.</p>
						</div>
						<div className="price-div">
							<span>À partir de</span>
							<p>
								1 500 <span>€</span>
							</p>
						</div>
						<hr />
						<div className="functionality">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-check-icon lucide-check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								<p>Site complet (3 à 5 pages)</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-check-icon lucide-check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								<p>Menu dynamique</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-check-icon lucide-check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								<p>Réservation ou commande</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-check-icon lucide-check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								<p>SEO local optimisé</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-check-icon lucide-check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								<p>Maintenance incluse</p>
							</div>
						</div>
						<div>
							<a href="#">
								Choisir
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-arrow-right-icon lucide-arrow-right"
								>
									<path d="M5 12h14" />
									<path d="m12 5 7 7-7 7" />
								</svg>
							</a>
						</div>
					</div>
					<div className="offer">
						<div>
							<h3>Accompagnement Mensuel</h3>
							<p>Pour les restaurants qui veulent être visibles rapidement.</p>
						</div>
						<div className="price-div">
							<span>par mois</span>
							<p>
								99<span>€</span>
							</p>
						</div>
						<hr />
						<div className="functionality">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-check-icon lucide-check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								<p>Mises à jour régulières</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-check-icon lucide-check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								<p>Optimisation Google</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-check-icon lucide-check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								<p>Support prioritaire</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-check-icon lucide-check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								<p>Rapports mensuels</p>
							</div>
						</div>
						<div>
							<a href="#">
								Choisir
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-arrow-right-icon lucide-arrow-right"
								>
									<path d="M5 12h14" />
									<path d="m12 5 7 7-7 7" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>
			<section id="realisations">
				<div id="top-realisations">
					<div className="top-section-text">
						<hr />
						<p>Réalisations</p>
					</div>
					<h2>
						Ils nous ont fait <span>confiance</span>.
					</h2>
				</div>
				<div id="realisation-div">
					<div className="realisation">
						<div>
							<img src="/assets/realisation1.jpg" alt="realisation" />
							<div className="realisation-name">
								<h3>Le Bistrot Parisien</h3>
								<p>Restaurant Gastronomique</p>
							</div>
						</div>
						<p>+ 180% de réservations en ligne</p>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-external-link-icon lucide-external-link"
							>
								<path d="M15 3h6v6" />
								<path d="M10 14 21 3" />
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
							</svg>
						</div>
					</div>
					<div className="realisation">
						<div>
							<img src="/assets/realisation1.jpg" alt="realisation" />
							<div className="realisation-name">
								<h3>Le Bistrot Parisien</h3>
								<p>Restaurant Gastronomique</p>
							</div>
						</div>
						<p>+ 180% de réservations en ligne</p>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-external-link-icon lucide-external-link"
							>
								<path d="M15 3h6v6" />
								<path d="M10 14 21 3" />
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
							</svg>
						</div>
					</div>
					<div className="realisation">
						<div>
							<img src="/assets/realisation1.jpg" alt="realisation" />
							<div className="realisation-name">
								<h3>Le Bistrot Parisien</h3>
								<p>Restaurant Gastronomique</p>
							</div>
						</div>
						<p>+ 180% de réservations en ligne</p>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-external-link-icon lucide-external-link"
							>
								<path d="M15 3h6v6" />
								<path d="M10 14 21 3" />
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
							</svg>
						</div>
					</div>
				</div>
			</section>
			<section id="process">
				<div id="process-top">
					<div className="top-section-text">
						<hr />
						<p>Le Processus</p>
					</div>
					<h2>
						Comment ça se <span>passe</span>?
					</h2>
				</div>
				<div id="process-div">
					<div className="argument">
						<p>01</p>
						<div>
							<h3>Site Gratuit</h3>
							<p>Nous analysons votre présence en ligne et identifions les opportunités.</p>
						</div>
					</div>
					<div className="argument">
						<p>02</p>
						<div>
							<h3>Site Gratuit</h3>
							<p>Nous analysons votre présence en ligne et identifions les opportunités.</p>
						</div>
					</div>
					<div className="argument">
						<p>03</p>
						<div>
							<h3>Site Gratuit</h3>
							<p>Nous analysons votre présence en ligne et identifions les opportunités.</p>
						</div>
					</div>
					<div className="argument">
						<p>04</p>
						<div>
							<h3>Site Gratuit</h3>
							<p>Nous analysons votre présence en ligne et identifions les opportunités.</p>
						</div>
					</div>
				</div>
			</section>
			<section id="vision">
				<div id="vision-photo"></div>
				<div id="vision-text">
					<div className="top-section-text">
						<hr />
						<p>Notre vision</p>
					</div>
					<h2>
						Construire le <span>digital</span> de la restauration de <span>demain</span>.
					</h2>
					<p>
						Le monde de la restauration évolue. Les clients recherchent, comparent et décident en ligne.
						Nous créons les outils digitaux qui permettent aux établissements de rester compétitifs,
						visibles et attractifs.
					</p>
				</div>
			</section>
			<section id="contact">
				<div id="contact-content">
					<div>
						<hr />
						<p>Contact</p>
						<hr />
					</div>
					<h2>
						Prêt à attirer plus de <span>clients</span> ?
					</h2>
					<p>Discutons de votre projet. Audit gratuit et sans engagement.</p>
					<a href="#">
						Demander un site gratuit
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-arrow-right-icon lucide-arrow-right"
						>
							<path d="M5 12h14" />
							<path d="m12 5 7 7-7 7" />
						</svg>
					</a>
				</div>
			</section>
			<footer>
				<div>
					<div>
						<img src="/assets/logo.png" alt="logo" width={52} height={52} />
						<p>
							Studio digital spécialisé restauration. <br />{" "}
							Sites et outils conçus pour générer des clients.
						</p>
					</div>
					<div>
						<p>Navigation</p>
						<a href="#offers">Nos Offres</a>
						<a href="#realisations">Nos Réalisations</a>
						<a href="#process">Le Processus</a>
						<a href="#contact">Nous Contacter</a>
					</div>
					<div>
						<p>Contact</p>
						<a href="#">contact@framestudio.fr</a>
					</div>
				</div>
				<hr />
				<div>
					<p>© 2026 Frame Studio. Tous droits réservés.</p>
					<div>
						<a href="#">Mentions légales</a>
						<a href="#">Politique de confidentialité</a>
					</div>
				</div>
			</footer>
		</>
	),

	onpost: null,
	onrequest: null,
} satisfies Slick.Page;
