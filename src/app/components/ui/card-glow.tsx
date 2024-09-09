"use client";
import React from "react";
import {
    GlowingStarsBackgroundCard,
    GlowingStarsDescription,
    GlowingStarsTitle,
} from "../acertenity/glowing-stars";

export default function CardGlow() {
    return (
        <div className="flex py-20 items-center justify-center antialiased">
            <GlowingStarsBackgroundCard>
                <GlowingStarsTitle>Coming Soon</GlowingStarsTitle>
                <div className="flex justify-between items-end">
                    <GlowingStarsDescription>
                    We are working hard to bring you Ai App.
                    </GlowingStarsDescription>
                </div>
            </GlowingStarsBackgroundCard>
        </div>
    );
}
