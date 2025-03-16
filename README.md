
# Foyer - Smart Home Dashboard

The Smart Home Dashboard project started as an idea to create a dynamic, interactive, and highly responsive dashboard for controlling and monitoring smart home devices. This project is a Next.js-based smart home dashboard that allows users to manage and monitor their smart devices from a single interface.


## 🚀 Journey So Far

### **Phase 1: Project Inception**
The goal was to develop a robust smart home dashboard using modern web technologies. Initially, the project was set up as a **React** application with a focus on creating a landing page and core dashboard components.

### **Phase 2: Migration to Next.js**
After realizing the potential of server-side rendering (SSR) and better performance, I decided to migrate the project from **React** to **Next.js**. This helped to:
- Improve page performance with SSR and static generation.
- Implement dynamic routing effortlessly.
- Enhance SEO and loading speed.


## 🛠️ **Phase 3: Core Dashboard Development**
Focus was on building the core structure and layout, including:
- **Responsive Landing Page:** The landing page was the first component to be developed in Next.js, ensuring fluid responsiveness and smooth animations.
- **Dashboard Page:** Designed to display an overview of all connected devices, each represented by interactive cards.
- **Sidebar Navigation:** Implemented a persistent sidebar to toggle between pages and functionalities.


## 🔒 **Phase 4: Authentication and Protected Routes**
With the dashboard becoming more functional, there was integration of **NextAuth.js** for secure authentication. This ensured that only authorized users could access the dashboard and its features.


## 🗺️ **Phase 5: State Management and Device Control**
To manage the state of various devices efficiently, I chose **Zustand** over more complex libraries like Redux. Features implemented during this phase include:
- **Device Addition and Deletion:** Users can add and remove devices from the dashboard.
- **Device Toggling:** Real-time switching between active and inactive states.
- **State Persistence:** Utilizing local storage for device data persistence.
- **Active Duration Tracking:** Showing how long a device has been active for.


## 🪲 **Challenges and Fixes**
Like any ambitious project, I have faced several challenges along the way:
- **Hydration Mismatch Issues:** Encountered issues with SSR and client-side rendering, especially with state hydration and device management.
- **State Management Bugs:** Adjusted how state was managed and persisted, particularly with the addition and removal of devices.
- **Dynamic Components:** Addressed client/server rendering mismatches by ensuring consistent use of client components.


## ✅ **Current Status**
- The core functionality of adding, removing, and toggling devices is working well.
- Authentication using **NextAuth.js** is fully integrated.
- State management with **Zustand** is reliable and persistent.

---

## 🚧 **Next Steps**
1. Properly implement the dark/light mode feature
2. Further refine the UI and add more customization options.
3. Improve responsiveness and accessibility. 
4. Improve error handling and validation throughout the dashboard.
5. Deploy the project for testing and gather user feedback.


## 📸 Dashboard Preview

Here’s a quick look at the current state of the Smart Home Dashboard:

![Dashboard Screenshot](/dashboard.png)

