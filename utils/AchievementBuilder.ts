import { User } from "../models/User";

export function buildAchievement(user: User) {
    if (user.gameSessions.length > 0)
    {
        const achievementIndex = user.achievements.findIndex((x) => x.title === "No-lifer");
        const achievementIndex1 = user.achievements.findIndex((x) => x.title === "Hello world");
        const achievementIndex2 = user.achievements.findIndex((x) => x.title === "Score!!1");
        const achievementIndex3 = user.achievements.findIndex((x) => x.title === "I like all dem flavors");
        const achievementIndex4 = user.achievements.findIndex((x) => x.title === "Quickdraw");
        const achievementIndex5 = user.achievements.findIndex((x) => x.title === "If in doubt, AFK out");
        
        // Calc Score!!1
        const achievementsScore = () => {
            let x = 0;
            for (let index = 0; index < user.gameSessions.length; index++) {
                x += user.gameSessions[index].points;
            }
            return x;
        }
        
        // Calc Quickdraw
        const achievementsQuickdraw = () => {
            for (let index = 0; index < user.gameSessions.length; index++) {
                if (user.gameSessions[index].fastestTime <= 5) return true;
            }
        }
        
        // Set Score!!1 progress
        user.achievements[achievementIndex2].currentProgress = achievementsScore();
        
        // Set No-Lifer progress
        user.achievements[achievementIndex].currentProgress = user.gameSessions.length;

        // Toggle Hello World
        if (user.gameSessions.length > 0) {
            user.achievements[achievementIndex1].isCompleted = true;
        }

        // Toggle No-lifer
        if (user.gameSessions.length === user.achievements[achievementIndex].destination) {
            user.achievements[achievementIndex].isCompleted = true;
        }

        // Toggle Score!!1
        if (user.achievements[achievementIndex2].currentProgress === user.achievements[achievementIndex2].destination) {
            user.achievements[achievementIndex2].isCompleted = true;
        }
        
        // Toggle Quickdraw
        if (achievementsQuickdraw()) {    
            user.achievements[achievementIndex4].isCompleted = true;
        }
    }
    console.log(user)
    return user.achievements;
}