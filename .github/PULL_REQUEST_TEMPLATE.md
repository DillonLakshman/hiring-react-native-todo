## 🚀 Description

Briefly describe the features you’ve implemented in this PR.  
Mention any key implementation details, edge cases, or design decisions.

- Floating action button (FAB) that adds a new task and immediately focuses the input for editing
- Displays all tasks in an optimized FlashList with custom styling
- Long-press on any task to enter edit mode with inline text editing
- Checkbox with custom styling that toggles completion state (includes strikethrough visual feedback)
- Delete icon appears in edit mode, or clear the text to auto-delete
- Displays a friendly message when no tasks exist
- KeyboardAvoidingView used for proper UX when editing tasks
- Integrated custom fonts (TTFirs-Neue-Bold, DMSans-Regular) as per figma
- Implemented Tailwind CSS classes via NativeWind for rapid, consistent styling

---

## 💡 Solution Rationale & User Value

- Auto-focus on new tasks for immediate editing UX: This reduces the number of clicks required to add a new task
- Smart deletion: empty text triggers auto-delete on blur providing two intuitive methods of deletion for better UX
- Responsive keyboard behavior with platform-specific adjustments: thus control elements will not be hidden by the keybaord
- Accessibility labels and roles throughout for screen reader support and app store and play store compliance
- Used `@shopify/flash-list` instead of FlatList for better performance with large lists

---

## 💾 Local Persistence Rationale

**State Management Pattern**: Zustand with persistence middleware with react native async storage
1. **Persistence built-in**: Zustand's persist middleware automatically syncs with storage
2. **Simpler than Redux**: Less boilerplate while maintaining predictability

**For this app**: AsyncStorage is the ideal choice. Our data is small (<1MB even with 1000 tasks), writes are infrequent (only on user actions), and the simple API means less code to maintain.

---

## 🧠 Global State (if used)

Zustand Used:

**Automatic Persistence**: The persist middleware handles all storage operations automatically. Without it, I'd need to manually:
  - Load data on app start
  - Save on every state change
  - Handle serialization/deserialization
  - Manage loading states

---

## 💫 Animations (Bonus, if implemented)

Impemented: for fab button state changes for demostrative purposes.

---

## 🎥 Demo Video

Video can be found in ./demo/Recording.MP4

---

## 🛠️ Setup Instructions (if different from README)

- Can be obtained from README.md

---

## 📌 Known Limitations / Assumptions

1. **Task IDs**: Using `Date.now()` for IDs. Works for single-user app, but would need UUIDs for multi-device sync
2. **Delete Behavior**: Clearing task text auto-deletes. Assumed this is acceptable UX
3. **Edit Trigger**: Long-press to edit. Assumed this is preferable to always-editable fields
4. **No Undo**: Delete is permanent (could add undo toast for better UX)

---

## ✅ Checklist

- [X] Tasks can be added
- [X] Tasks can be viewed
- [X] Tasks can be edited
- [X] Tasks can be marked complete/incomplete
- [X] Tasks can be deleted
- [X] Data is persisted locally on the device
- [X] Local storage method explained
- [X] (Optional) Global state usage explained
- [X] (Optional) Animations added using `react-native-reanimated`
- [X] Demo video included
- [X] Solution rationale & user value explained

---
