"use client";

import { useEffect } from "react";

/**
 * ImageProtection — Client-side protection against casual image theft
 * 
 * This component:
 * 1. Disables right-click context menu on images
 * 2. Prevents drag-and-drop of images
 * 3. Blocks common keyboard shortcuts for saving images
 * 
 * Note: This is a deterrent, not a security measure. Determined users
 * can still access images via dev tools. For true protection, use
 * watermarking and server-side access controls.
 */
export default function ImageProtection() {
  useEffect(() => {
    // Disable right-click context menu on images
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG") {
        e.preventDefault();
        return false;
      }
    };

    // Disable dragging of images
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG") {
        e.preventDefault();
        return false;
      }
    };

    // Block Ctrl+S, Ctrl+Shift+I, F12 (common save/devtools shortcuts)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+S (Save)
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
      }
      // Ctrl+Shift+S (Save As)
      if (e.ctrlKey && e.shiftKey && e.key === "S") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null; // This component renders nothing, only adds event listeners
}
