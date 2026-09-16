import { addons } from "storybook/manager-api";
import { SET_INDEX, STORY_MISSING } from "storybook/internal/core-events";

const FALLBACK_STORY_ID = "design-system-button--docs";

addons.register("mlds/fallback-story", (api) => {
  const goHome = () => {
    const { storyId } = api.getUrlState();
    if (storyId === FALLBACK_STORY_ID) return;
    const entries = api.getIndex()?.entries;
    if (!entries) return;
    if (storyId && entries[storyId]) return;
    if (!entries[FALLBACK_STORY_ID]) return;
    api.selectStory(FALLBACK_STORY_ID);
  };

  api.on(STORY_MISSING, goHome);
  addons.getChannel().on(SET_INDEX, goHome);
});
