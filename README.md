# Todo App – Vanilla JavaScript + SCSS

_日本語_

**HTML、SCSS、Vanilla JavaScript** を使用して作成した、シンプルな **Todo リストアプリ** です。  
フレームワークを使わず、**アプリのロジック、DOM 操作、シンプルな状態管理** に重点を置いています。

---

## 主な機能

- タスクの追加
- タスクの編集
- タスクの削除
- タスクの完了／未完了の切り替え
- タスクのフィルタリング（All / Active / Done）
- ドラッグ＆ドロップによる並び替え
- `localStorage` による自動保存
- 日付と時刻のリアルタイム表示
- レスポンシブ対応

---

## アプリの仕組み

### 1. 状態管理

このアプリでは、以下の2つの状態を管理しています。

- `todos` → タスク一覧を管理
- `currentFilter` → 現在選択されているフィルター

状態は **localStorage** に保存され、ページを再読み込みしてもデータが保持されます。

---

### 2. Todo データ構造

各 Todo は以下の形式で管理されています。

```js
{
  id: string,
  text: string,
  done: boolean
}
```

## 3. 動的レンダリング

Todo は `map()` と `innerHTML` を使用して DOM に描画されます。

データの変更（追加／編集／削除／完了切替）は、以下の流れで処理されます。

1. 状態（`todos`）を更新
2. `localStorage` に保存
3. 画面を再レンダリング

この仕組みにより、UI とデータの整合性が保たれます。

---

## 4. Todo のフィルタリング

Todo は状態別にフィルタリングできます。

- **All** → すべてのタスク
- **Active** → 未完了のタスク
- **Done** → 完了済みのタスク

選択したフィルターは `localStorage` に保存され、再読み込み後も維持されます。

---

## 5. ドラッグ＆ドロップ

タスクの並び替えに **ドラッグ＆ドロップ** を使用できます。

- **SortableJS** を使用
- 並び順は即座に `localStorage` に保存
- ページを再読み込みしても順序が保持されます

---

## 6. SCSS によるスタイリング

スタイリングは **SCSS** を使用し、保守性と可読性を重視しています。

- SCSS は partial（`_normalize.scss`）で分割
- ビルド不要で確認できるよう、コンパイル済み CSS も同梱

---

## 使用技術

- HTML5
- SCSS
- Vanilla JavaScript
- LocalStorage API
- SortableJS
- Font Awesome

---

## フォルダ構成

```text
.
├── index.html
├── manifest.json
├── css/
│   └── style.css
├── scss/
│   ├── style.scss
│   └── _normalize.scss
├── scripts/
│   └── app.js
└── assets/
    └── icons/
```

---

## プロジェクトの目的

本プロジェクトは以下を目的として作成しました。

- JavaScript の基礎学習
- DOM 操作の実践
- フレームワークを使わないシンプルな状態管理の実装
- ポートフォリオ用プロジェクト

---

_English_

A simple **Todo List application** built using **HTML, SCSS, and Vanilla JavaScript**.  
This project focuses on **application logic, DOM manipulation, and simple state management** without using any framework.

---

## Features

- Add new tasks
- Edit tasks
- Delete tasks
- Mark tasks as completed / active
- Filter tasks (All / Active / Done)
- Drag & drop to reorder tasks
- Data is automatically saved using `localStorage`
- Displays real-time date & time
- Responsive layout

---

## How the App Works

### 1. State Management

The application uses two main states:

- `todos` → stores the list of tasks
- `currentFilter` → stores the active filter

The state is saved to and loaded from **localStorage**, so data persists even after a page reload.

---

### 2. Todo Data Structure

Each todo is stored in the following format:

```js
{
  id: string,
  text: string,
  done: boolean
}
```

## 3. Dynamic Rendering

Todos are rendered to the DOM using `map()` and `innerHTML`.

Every data change (add / edit / delete / toggle) follows this flow:

1. Update the state (`todos`)
2. Save the data to `localStorage`
3. Re-render the UI

This approach ensures the UI always stays in sync with the data.

---

## 4. Todo Filtering

Todos can be filtered by status:

- **All** → shows all tasks
- **Active** → shows incomplete tasks
- **Done** → shows completed tasks

The selected filter is saved to `localStorage` and restored on page reload.

---

## 5. Drag & Drop

The app supports **drag & drop** for reordering tasks.

- Powered by **SortableJS**
- The updated order is immediately saved to `localStorage`
- The order persists after reloading the page

---

## 6. Styling with SCSS

The app is styled using **SCSS** to keep the code clean and organized.

- SCSS structure is split using partials (`_normalize.scss`)
- Compiled CSS files are included for easy preview without a build process

---

## Technologies Used

- HTML5
- SCSS
- Vanilla JavaScript
- LocalStorage API
- SortableJS
- Font Awesome

---

## Project Structure

```text
.
├── index.html
├── manifest.json
├── css/
│   └── style.css
├── scss/
│   ├── style.scss
│   └── _normalize.scss
├── scripts/
│   └── app.js
└── assets/
    └── icons/
```

---

## Project Purpose

This project was created for:

- Practicing JavaScript fundamentals
- Demonstrating DOM manipulation
- Showing simple state management without frameworks
- Portfolio purposes

---

_Bahasa Indonesia_

Aplikasi **Todo List sederhana** yang dibuat menggunakan **HTML, SCSS, dan Vanilla JavaScript**.  
Aplikasi ini dirancang untuk fokus pada **logika aplikasi, manipulasi DOM, dan manajemen state sederhana** tanpa framework.

---

## Fitur Utama

- Tambah task baru
- Edit task
- Hapus task
- Tandai task selesai / belum selesai
- Filter task (All / Active / Done)
- Drag & drop untuk mengubah urutan task
- Data tersimpan otomatis menggunakan `localStorage`
- Menampilkan tanggal & jam real-time
- Tampilan responsif

---

## Cara Kerja Aplikasi

### 1. Manajemen State

Aplikasi menggunakan dua state utama:

- `todos` → menyimpan daftar task
- `currentFilter` → menyimpan filter aktif

State disimpan dan dimuat ulang menggunakan **localStorage** agar data tetap ada meskipun halaman direfresh.

### 2. Struktur Data Todo

Setiap todo disimpan dalam format berikut:

```js
{
  id: string,
  text: string,
  done: boolean
}
```

## 3. Rendering Dinamis

Todo dirender ke DOM menggunakan `map()` dan `innerHTML`.

Setiap perubahan data (add / edit / delete / toggle) akan melalui alur berikut:

1. Mengubah state (`todos`)
2. Menyimpan data ke `localStorage`
3. Melakukan render ulang tampilan

Pendekatan ini memastikan tampilan selalu sinkron dengan data.

## 4. Filter Todo

Todo dapat difilter berdasarkan status:

- **All** → menampilkan semua task
- **Active** → menampilkan task yang belum selesai
- **Done** → menampilkan task yang sudah selesai

Filter yang dipilih akan disimpan di `localStorage` sehingga tetap aktif meskipun halaman direfresh.

## 5. Drag & Drop

Aplikasi mendukung fitur **drag & drop** untuk mengatur urutan task.

- Menggunakan **SortableJS**
- Urutan task yang baru langsung disimpan ke `localStorage`
- Perubahan posisi akan tetap tersimpan setelah reload halaman

## 6. Styling dengan SCSS

Styling aplikasi ditulis menggunakan **SCSS** untuk menjaga struktur kode tetap rapi dan terorganisir.

- Struktur SCSS dipisah menggunakan partial (`_normalize.scss`)
- File CSS hasil compile tetap disertakan untuk kemudahan preview tanpa proses build tambahan

---

## Teknologi yang Digunakan

- HTML5
- SCSS
- Vanilla JavaScript
- LocalStorage API
- SortableJS
- Font Awesome

---

## Struktur Folder

```text
.
├── index.html
├── manifest.json
├── css/
│   └── style.css
├── scss/
│   ├── style.scss
│   └── _normalize.scss
├── scripts/
│   └── app.js
└── assets/
    └── icons/
```

---

### Tujuan Project

Project ini dibuat dengan tujuan:

- Latihan JavaScript fundamental
- Demonstrasi manipulasi DOM
- Contoh penggunaan state sederhana tanpa framework
- Sebagai portfolio project
