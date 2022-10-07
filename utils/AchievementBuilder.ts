import achievementData from "../data/achievementData";
import { AchievementModel } from "../models/AchievementModel";
import { User } from "../models/User";

export function buildAchievement(user: User) {  
    function checkIndex(achievement: string) {
        const index = achievementData.find(x => x.title === achievement)
        if (user.achievements.includes(index as AchievementModel)) return true;
    }

    if (user.gameSessions.length > 0 && !checkIndex(achievementData[0].title)) {
        user.achievements.push(achievementData[0])
    }
        
    if (user.gameSessions.length > 2 && !checkIndex(achievementData[1].title)) {
        user.achievements.push(achievementData[1])
    }
}