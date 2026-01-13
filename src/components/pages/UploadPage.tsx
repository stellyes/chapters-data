'use client';

import { useState } from 'react';
import { Upload, FileText, Check, RefreshCw } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { uploadHistory, supportedFormats } from '@/data/mock-data';

export function UploadPage() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <div>
      <Header title="Import Your Data" subtitle="Upload" />

      {/* Drop Zone */}
      <Card className="mb-8">
        <div
          onDragEnter={() => setDragActive(true)}
          onDragLeave={() => setDragActive(false)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => setDragActive(false)}
          className={`border-2 border-dashed rounded-lg py-16 px-8 text-center cursor-pointer transition-all duration-300 ${
            dragActive
              ? 'border-[var(--accent)] bg-[var(--accent)]/5'
              : 'border-[var(--border)] bg-[var(--paper)]'
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-[var(--accent)]/15 flex items-center justify-center mx-auto mb-6">
            <Upload className="w-7 h-7 text-[var(--accent)]" />
          </div>
          <p className="font-serif text-2xl text-[var(--ink)] mb-2 font-medium">
            Drop files here or click to browse
          </p>
          <p className="text-[var(--muted)] text-sm">
            Supports CSV, Excel, JSON, and Parquet up to 500MB
          </p>
          <button className="mt-6 px-8 py-3 bg-[var(--ink)] text-[var(--paper)] border-none rounded-sm text-sm font-medium cursor-pointer font-sans">
            Select Files
          </button>
        </div>
      </Card>

      {/* Supported Formats */}
      <div className="mb-8">
        <SectionLabel>Supported Formats</SectionLabel>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {supportedFormats.map((format, i) => (
            <Card key={i} className="text-center p-6">
              <FileText className="w-6 h-6 text-[var(--accent)] mb-3 mx-auto" />
              <p className="font-semibold text-[var(--ink)] mb-1">{format.name}</p>
              <p className="text-xs text-[var(--muted)]">{format.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Upload History */}
      <Card>
        <SectionLabel>History</SectionLabel>
        <SectionTitle>Recent Uploads</SectionTitle>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="text-left py-3 text-[var(--muted)] font-medium text-xs uppercase tracking-wider">
                File Name
              </th>
              <th className="text-left py-3 text-[var(--muted)] font-medium text-xs uppercase tracking-wider">
                Size
              </th>
              <th className="text-left py-3 text-[var(--muted)] font-medium text-xs uppercase tracking-wider">
                Date
              </th>
              <th className="text-left py-3 text-[var(--muted)] font-medium text-xs uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {uploadHistory.map((file, i) => (
              <tr key={i} className="border-b border-[var(--border)]">
                <td className="py-4 text-[var(--ink)] font-medium">{file.name}</td>
                <td className="py-4 text-[var(--muted)]">{file.size}</td>
                <td className="py-4 text-[var(--muted)]">{file.date}</td>
                <td className="py-4">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-medium ${
                      file.status === 'completed'
                        ? 'bg-[var(--accent)]/15 text-[var(--accent)]'
                        : 'bg-[var(--warning)]/15 text-[var(--warning)]'
                    }`}
                  >
                    {file.status === 'completed' ? (
                      <Check className="w-3 h-3" />
                    ) : (
                      <RefreshCw className="w-3 h-3" />
                    )}
                    {file.status.charAt(0).toUpperCase() + file.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
