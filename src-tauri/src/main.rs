#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// #[tauri::command]
// fn greet(name: &str) -> String {
//     format!("Hello, {}! You've been greeted from Rust!", name)
// }

// use tauri::Manager;
// #[tauri::command]
// async fn close_splashscreen(window: tauri::Window) {
//     println!("close_splashscreen");
//     if let Some(splashscreen) = window.get_window("splashscreen") {
//         splashscreen.close().unwrap();
//     }
//     window.get_window("main").unwrap().show().unwrap();
// }

use tauri::Manager;

fn main() {
    tauri::Builder::default()
        // .invoke_handler(tauri::generate_handler![greet])
        // .invoke_handler(tauri::generate_handler![close_splashscreen])
        .setup(|app| {
            let splashscreen_window = app.get_window("splashscreen").unwrap();
            let main_window = app.get_window("main").unwrap();
            tauri::async_runtime::spawn(async move {
                println!("Initializing...");
                std::thread::sleep(std::time::Duration::from_secs(2));
                println!("Done initializing.");
                splashscreen_window.close().unwrap();
                main_window.show().unwrap();
            });
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("Error while running Tauri application");
}
