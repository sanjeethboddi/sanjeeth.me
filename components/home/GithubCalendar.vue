<template>
  <div v-show="$config.githubCalendar.enabled" class="bg-gray-800 border-t border-b border-dashed border-gray-700">
    <div data-aos="fade-up" class="max-w-7xl mx-auto border-l border-r border-dashed border-gray-700">
      <div class="max-w-prose text-center mx-auto py-4">
        <p class="text-xs leading-6 text-indigo-600 font-semibold tracking-wide lowercase">{{ $t('githubCalendar.subtext') }}</p>
        <a :href="`https://github.com/${$config.social.github}`" target="_blank" rel="noreferrer" class="mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500">{{ $t('githubCalendar.header') }}</a>
      </div>
      <div class="calendar max-w-6xl content-center lowercase">

      </div>
    </div>
  </div>
</template>

<script>
import GitHubCalendar from 'github-calendar'

export default {
  mounted() {
    GitHubCalendar(".calendar", this.$config.social.github, { responsive: true, tooltips: true });
  }
}
</script>

<style scoped>
>>> .calendar table {
  border-collapse: separate;
  border-spacing: 1px 1px;
}

/* labels  */
>>> td.ContributionCalendar-label {
  @apply text-gray-500 text-lg;
  padding: 9px;
  font-weight: bold;
}
/* cells */
>>> div.ContributionCalendar-day{ 
  padding: 5px;
  border-radius: 1px;
}

>>> td.ContributionCalendar-day{
  width: 7px;
  height: 7px;
  border-radius: 4px;
}
>>> td.ContributionCalendar-day[data-level='0'] {
  @apply fill-current text-gray-900;
  background-color: rgb(255, 255, 255)
}

>>> .ContributionCalendar-day[data-level='1'] {
  background-color: rgb(191, 191, 255);
}

>>> .ContributionCalendar-day[data-level='2'] {
  background-color: rgb(127, 127, 255);
}

>>> .ContributionCalendar-day[data-level='3'] {
  background-color: rgb(63, 63, 255);
}

>>> .ContributionCalendar-day[data-level='4'] {
  background-color: rgb(0, 0, 255);
}

>>> .graph-before-activity-overview {
  border: none;
}

.calendar {
  border: none;
}

>>> .width-full > .float-right {
  @apply text-sm text-gray-400 flex flex-row items-center justify-center px-4;
}

>>> .width-full > .float-right{
  @apply mx-0.5;
}

.calendar >>> .width-full > .float-left {
  @apply flex items-center justify-center;
}

.calendar >>> .width-full > .float-left a {
  @apply pl-8 text-sm text-gray-400 hover:text-indigo-500;
}



>>> .contrib-column {
  @apply border-none;
  display: none;
}

>>> .contrib-number {
  @apply text-gray-200 font-bold;
}

>>> .text-muted {
  @apply text-gray-300;
}

@media (min-width: 768px) {
  
}

</style>
