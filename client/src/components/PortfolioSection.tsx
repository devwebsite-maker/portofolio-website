import { useState } from "react";
import { motion } from "framer-motion";

const PortfolioSection = () => {
  const javaCode = `
import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.stage.Stage;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;

public class TaskManagerApp extends Application {
    
    private TableView<Task> taskTable;
    private TextField taskField;
    private ComboBox<String> priorityCombo;
    
    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("Aplikasi Manajemen Tugas");
        
        // Membuat komponen UI
        Label titleLabel = new Label("Aplikasi Manajemen Tugas");
        titleLabel.setStyle("-fx-font-size: 20px; -fx-font-weight: bold;");
        
        Label taskLabel = new Label("Tugas Baru:");
        taskField = new TextField();
        taskField.setPromptText("Masukkan tugas...");
        
        Label priorityLabel = new Label("Prioritas:");
        ObservableList<String> priorities = 
            FXCollections.observableArrayList("Tinggi", "Sedang", "Rendah");
        priorityCombo = new ComboBox<>(priorities);
        priorityCombo.setValue("Sedang");
        
        Button addButton = new Button("Tambah Tugas");
        addButton.setOnAction(e -> handleAddTask());
        
        // Layout utama
        VBox mainLayout = new VBox(10);
        mainLayout.setPadding(new Insets(20));
        mainLayout.getChildren().addAll(
            titleLabel,
            new HBox(10, taskLabel, taskField),
            new HBox(10, priorityLabel, priorityCombo),
            addButton,
            createTaskTable()
        );
        
        Scene scene = new Scene(mainLayout, 600, 400);
        primaryStage.setScene(scene);
        primaryStage.show();
    }
    
    private VBox createTaskTable() {
        // Implementasi tabel tugas
        VBox box = new VBox(10);
        box.setPadding(new Insets(10, 0, 0, 0));
        
        Label tableTitle = new Label("Daftar Tugas");
        tableTitle.setStyle("-fx-font-size: 16px;");
        
        taskTable = new TableView<>();
        // Kolom tabel...
        
        box.getChildren().addAll(tableTitle, taskTable);
        return box;
    }
    
    private void handleAddTask() {
        // Logika untuk menambahkan tugas
        String taskDesc = taskField.getText();
        String priority = priorityCombo.getValue();
        
        if (!taskDesc.isEmpty()) {
            // Tambahkan tugas ke tabel
            taskField.clear();
        }
    }
    
    public static void main(String[] args) {
        launch(args);
    }
    
    // Class Task untuk model data
    public static class Task {
        private String description;
        private String priority;
        private boolean completed;
        
        // Constructor, getters, setters...
    }
}`;

  const flutterCode = `
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Aplikasi Portfolio',
      theme: ThemeData(
        primarySwatch: Colors.teal,
        brightness: Brightness.dark,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: const PortfolioPage(),
    );
  }
}

class PortfolioPage extends StatefulWidget {
  const PortfolioPage({Key? key}) : super(key: key);

  @override
  _PortfolioPageState createState() => _PortfolioPageState();
}

class _PortfolioPageState extends State<PortfolioPage> {
  final List<Map<String, dynamic>> _projects = [
    {
      'title': 'Aplikasi Daftar Tugas',
      'description': 'Aplikasi mobile untuk manajemen tugas harian dengan fitur notifikasi',
      'tech': ['Flutter', 'Firebase'],
      'image': 'assets/images/task_app.png',
    },
    {
      'title': 'Aplikasi Fitness Tracker',
      'description': 'Aplikasi untuk melacak aktivitas olahraga dan kesehatan',
      'tech': ['Flutter', 'Provider', 'SQLite'],
      'image': 'assets/images/fitness_app.png',
    },
    // Proyek lainnya...
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Portfolio Proyek Mobile'),
        elevation: 0,
      ),
      body: Column(
        children: [
          const Padding(
            padding: EdgeInsets.all(16.0),
            child: Text(
              'Proyek Flutter Saya',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.all(16),
              itemCount: _projects.length,
              itemBuilder: (context, index) {
                final project = _projects[index];
                return ProjectCard(project: project);
              },
            ),
          ),
        ],
      ),
    );
  }
}

class ProjectCard extends StatelessWidget {
  final Map<String, dynamic> project;

  const ProjectCard({Key? key, required this.project}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.only(bottom: 16),
      elevation: 4,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Project content...
          Container(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  project['title'],
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 8),
                Text(project['description']),
                const SizedBox(height: 8),
                Wrap(
                  spacing: 8,
                  children: List.generate(
                    project['tech'].length,
                    (i) => Chip(
                      label: Text(project['tech'][i]),
                      backgroundColor: Colors.teal.withOpacity(0.2),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}`;

  const phpCode = `<?php
// Contoh kode database connection
function connectDatabase() {
  $host = "localhost";
  $username = "root";
  $password = "";
  $database = "portfolio_web";
  
  $conn = new mysqli($host, $username, $password, $database);
  
  if ($conn->connect_error) {
    die("Koneksi database gagal: " . $conn->connect_error);
  }
  
  return $conn;
}

// Fungsi untuk mendapatkan data proyek
function getProjects() {
  $conn = connectDatabase();
  $result = $conn->query("SELECT * FROM projects ORDER BY id DESC");
  
  $projects = [];
  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      $projects[] = $row;
    }
  }
  
  $conn->close();
  return $projects;
}
?>`;

  const pythonCode = `import tkinter as tk
from tkinter import messagebox
import pandas as pd
import matplotlib.pyplot as plt

class DataAnalyzerApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Python Data Analyzer")
        self.root.geometry("800x600")
        
        # Membuat UI untuk aplikasi
        self.create_widgets()
        
    def create_widgets(self):
        # Header
        header = tk.Label(self.root, text="Data Analyzer Tool", font=("Arial", 16, "bold"))
        header.pack(pady=20)
        
        # Button untuk membuka file
        open_btn = tk.Button(self.root, text="Buka File Data", command=self.open_file)
        open_btn.pack(pady=10)
        
    def open_file(self):
        # Logika untuk membuka dan menganalisis file
        try:
            data = pd.read_csv("data_sample.csv")
            self.analyze_data(data)
        except Exception as e:
            messagebox.showerror("Error", f"Gagal membuka file: {str(e)}")
            
    def analyze_data(self, data):
        # Visualisasi data sederhana
        plt.figure(figsize=(10, 6))
        data.plot(kind='bar')
        plt.title('Analisis Data')
        plt.tight_layout()
        plt.show()

# Menjalankan aplikasi
if __name__ == "__main__":
    root = tk.Tk()
    app = DataAnalyzerApp(root)
    root.mainloop()`;

  const projects = [
    {
      id: 1,
      title: "Website dengan PHP & MySQL",
      description: "Pembuatan website sederhana dengan sistem database untuk manajemen konten dan pengguna. Menggunakan PHP dan MySQL sebagai basis data.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["PHP", "MySQL", "HTML", "CSS"],
      code: phpCode,
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Aplikasi Python",
      description: "Pengembangan aplikasi sederhana menggunakan Python untuk mengotomatisasi tugas dan analisis data dasar. Termasuk antarmuka pengguna sederhana.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Tkinter", "Data Processing"],
      code: pythonCode,
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "Aplikasi Java",
      description: "Pengembangan aplikasi desktop menggunakan Java dan JavaFX untuk manajemen tugas dan produktivitas dengan antarmuka pengguna modern.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Java", "JavaFX", "Desktop App"],
      code: javaCode,
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "Aplikasi Mobile Flutter",
      description: "Pengembangan aplikasi mobile cross-platform menggunakan Flutter dan Dart. Fitur responsif dan antarmuka yang menarik.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Flutter", "Dart", "Mobile App"],
      code: flutterCode,
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 5,
      title: "Desain Grafis & UI/UX",
      description: "Proyek desain menggunakan CorelDRAW, Figma, dan Adobe Photoshop. Mencakup logo, mockup UI, dan aset grafis untuk berbagai kebutuhan.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["CorelDRAW", "Figma", "Photoshop", "UI/UX"],
      code: null,
      links: {
        live: "#",
        dribbble: "#"
      }
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openCodeView = (project: any) => {
    setSelectedProject(project);
  };

  const closeCodeView = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portofolio" className="py-20 bg-secondary-bg relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-poppins mb-12 flex items-center reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mr-4 text-accent-color">02.</span> Portofolio
          <div className="ml-4 h-px bg-text-light/30 w-32"></div>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="card bg-primary-bg rounded-lg overflow-hidden shadow-lg h-full"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 transform hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary-bg/40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <span className="text-accent-color font-medium">Lihat Detail</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold font-poppins mb-2">{project.title}</h3>
                <p className="text-text-light text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="bg-accent-color/10 text-accent-color text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <a href={project.links.live} className="text-accent-color hover:text-text-color transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  {project.links.github && (
                    <a href={project.links.github} className="text-accent-color hover:text-text-color transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  )}
                  {project.links.dribbble && (
                    <a href={project.links.dribbble} className="text-accent-color hover:text-text-color transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                      </svg>
                    </a>
                  )}
                  {project.code && (
                    <button 
                      onClick={() => openCodeView(project)}
                      className="text-accent-color hover:text-text-color transition"
                      title="Lihat Kode"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Code Viewer Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <motion.div 
              className="bg-primary-bg rounded-lg w-full max-w-3xl max-h-[80vh] overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-secondary-bg/90 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-text-light">
                  {selectedProject.id === 1 ? "database-connection.php" : 
                   selectedProject.id === 2 ? "data_analyzer.py" :
                   selectedProject.id === 3 ? "TaskManagerApp.java" : "main.dart"}
                </span>
                <button 
                  onClick={closeCodeView}
                  className="text-text-light hover:text-accent-color"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="p-4 overflow-y-auto max-h-[calc(80vh-40px)]">
                <pre className="text-left text-sm">
                  <code className="text-text-light font-mono">
                    {selectedProject.code}
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
