<script>
import { Download } from "lube-ui"
import SafeImg from "organs/$common/utils/SafeImg.svelte"
import styles from "js/styles.js"
</script>

<div class={styles.$common.contents_div}>
	<span>CSS Lube provides simple code intelligence in vscode extension</span><br>
	<span>It's easy to see the shortand that the library provides.</span>
	<div class="h=1"></div>
	<div>
		<Download classs="h=2.5 br=1.25 p=0_1 jc=center c=#fff
				bg=--primary-50 :hover/bg=--primary-40
				:hover/ts=0_0_.5
				:active/bg=--primary-50!"
				url="https://raw.githubusercontent.com/Artxe2/css-lube/main/lib/intellisense-css-lube-0.0.2.vsix">
			<span class="@md@fs=1.5">intellisense.vsix v0.0.2</span>
		</Download>
	</div>
	<div class="h=1"></div>
	<SafeImg classs="br=1 o=hidden" aspect_ratio={16 / 9} src="https://github.com/Artxe2/css-lube/raw/main/github-pages/static/imgs/intellisense.webp" />
</div>