import Opening from "@/Assets/Section/Opening";
import Bride from "@/Assets/Section/BrideName";
import MainSection from "@/Assets/Section/MainSection";
import StorySection from "@/Assets/Section/StorySection";
import CommentSection from "@/Assets/Section/CommentSection";
import GiftSection from "@/Assets/Section/GiftSection";
import PrayerSection from "@/Assets/Section/PrayerSection";

export default function Home() {
  return (
    <div>
      <Opening />
      <Bride />
      <MainSection />
      <StorySection />
      <CommentSection />
      <GiftSection />
      <PrayerSection/>
    </div>
  );
}
