'use client';

import { useState, useEffect, useCallback } from 'react';
import { StickyNote, ChevronRight, ChevronDown, FileText, Link as LinkIcon, ExternalLink, Trash2, Loader2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

interface NoteWithModule {
  id: string;
  type: 'TEXT' | 'LINK';
  content: string | null;
  linkName: string | null;
  linkUrl: string | null;
  linkPreviewTitle: string | null;
  linkPreviewDescription: string | null;
  linkPreviewImage: string | null;
  createdAt: string;
  module: {
    id: string;
    name: string;
    discipline: {
      id: string;
      name: string;
      pack: {
        id: string;
        name: string;
        domain: {
          id: string;
          name: string;
        };
      };
    };
  };
}

interface GroupedNotes {
  [domainId: string]: {
    name: string;
    packs: {
      [packId: string]: {
        name: string;
        disciplines: {
          [disciplineId: string]: {
            name: string;
            modules: {
              [moduleId: string]: {
                name: string;
                notes: NoteWithModule[];
              };
            };
          };
        };
      };
    };
  };
}

export function UserNotesSection() {
  const [notes, setNotes] = useState<NoteWithModule[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedDomains, setExpandedDomains] = useState<Set<string>>(new Set());
  const [expandedPacks, setExpandedPacks] = useState<Set<string>>(new Set());
  const [expandedDisciplines, setExpandedDisciplines] = useState<Set<string>>(new Set());
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());

  const fetchNotes = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/notes');
      if (response.ok) {
        const data = await response.json();
        setNotes(data);

        // Auto-expand first domain if there are notes
        if (data.length > 0) {
          const firstDomainId = data[0].module.discipline.pack.domain.id;
          setExpandedDomains(new Set([firstDomainId]));
        }
      }
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const handleDeleteNote = async (noteId: string) => {
    try {
      const response = await fetch(`/api/notes?id=${noteId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setNotes((prev) => prev.filter((n) => n.id !== noteId));
      }
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  const toggleDomain = (domainId: string) => {
    setExpandedDomains((prev) => {
      const next = new Set(prev);
      if (next.has(domainId)) {
        next.delete(domainId);
      } else {
        next.add(domainId);
      }
      return next;
    });
  };

  const togglePack = (packId: string) => {
    setExpandedPacks((prev) => {
      const next = new Set(prev);
      if (next.has(packId)) {
        next.delete(packId);
      } else {
        next.add(packId);
      }
      return next;
    });
  };

  const toggleDiscipline = (disciplineId: string) => {
    setExpandedDisciplines((prev) => {
      const next = new Set(prev);
      if (next.has(disciplineId)) {
        next.delete(disciplineId);
      } else {
        next.add(disciplineId);
      }
      return next;
    });
  };

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(moduleId)) {
        next.delete(moduleId);
      } else {
        next.add(moduleId);
      }
      return next;
    });
  };

  // Group notes by hierarchy
  const groupedNotes: GroupedNotes = notes.reduce((acc, note) => {
    const domain = note.module.discipline.pack.domain;
    const pack = note.module.discipline.pack;
    const discipline = note.module.discipline;
    const module = note.module;

    if (!acc[domain.id]) {
      acc[domain.id] = { name: domain.name, packs: {} };
    }
    if (!acc[domain.id].packs[pack.id]) {
      acc[domain.id].packs[pack.id] = { name: pack.name, disciplines: {} };
    }
    if (!acc[domain.id].packs[pack.id].disciplines[discipline.id]) {
      acc[domain.id].packs[pack.id].disciplines[discipline.id] = { name: discipline.name, modules: {} };
    }
    if (!acc[domain.id].packs[pack.id].disciplines[discipline.id].modules[module.id]) {
      acc[domain.id].packs[pack.id].disciplines[discipline.id].modules[module.id] = { name: module.name, notes: [] };
    }
    acc[domain.id].packs[pack.id].disciplines[discipline.id].modules[module.id].notes.push(note);

    return acc;
  }, {} as GroupedNotes);

  // Sanitize HTML to prevent XSS
  const sanitizeHtml = (html: string): string => {
    return html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  // Simple markdown renderer (with XSS sanitization)
  const renderMarkdown = (text: string) => {
    const safeText = sanitizeHtml(text);
    const html = safeText
      .replace(/^### (.+)$/gm, '<h3 class="text-base font-semibold mt-2 mb-1">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="text-lg font-semibold mt-2 mb-1">$1</h2>')
      .replace(/^# (.+)$/gm, '<h1 class="text-xl font-bold mt-2 mb-1">$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/__(.+?)__/g, '<u>$1</u>')
      .replace(/~~(.+?)~~/g, '<del>$1</del>')
      .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
      .replace(/\n/g, '<br>');

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  const renderNote = (note: NoteWithModule) => (
    <div
      key={note.id}
      className="p-3 rounded-lg"
      style={{
        backgroundColor: 'var(--color-bg-tertiary)',
        borderWidth: '1px',
        borderColor: 'var(--color-border-light)',
      }}
    >
      {note.type === 'TEXT' ? (
        <div className="flex items-start gap-2">
          <FileText className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--ctp-yellow)' }} />
          <div className="flex-1 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            {renderMarkdown(note.content || '')}
          </div>
        </div>
      ) : (
        <a
          href={note.linkUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-3 hover:opacity-80 transition-opacity"
        >
          <LinkIcon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--ctp-blue)' }} />
          <div className="flex-1 min-w-0">
            <div className="flex gap-3">
              {note.linkPreviewImage && (
                <img
                  src={note.linkPreviewImage}
                  alt=""
                  className="w-12 h-12 rounded object-cover shrink-0"
                />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="font-medium text-sm truncate" style={{ color: 'var(--color-text)' }}>
                    {note.linkName || note.linkPreviewTitle || 'Lien'}
                  </span>
                  <ExternalLink className="w-3 h-3 shrink-0" style={{ color: 'var(--color-text-muted)' }} />
                </div>
                {note.linkPreviewDescription && (
                  <p className="text-xs line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>
                    {note.linkPreviewDescription}
                  </p>
                )}
                <p className="text-xs truncate" style={{ color: 'var(--ctp-blue)' }}>
                  {note.linkUrl}
                </p>
              </div>
            </div>
          </div>
        </a>
      )}
      <div className="flex justify-between items-center mt-2 pt-2" style={{ borderTopWidth: '1px', borderColor: 'var(--color-border-light)' }}>
        <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
          {new Date(note.createdAt).toLocaleDateString('fr-FR')}
        </span>
        <button
          onClick={() => handleDeleteNote(note.id)}
          className="p-1 rounded hover:bg-[var(--color-bg-elevated)] transition-colors"
          style={{ color: 'var(--ctp-red)' }}
          title="Supprimer"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <StickyNote className="w-5 h-5" style={{ color: 'var(--ctp-yellow)' }} />
          Mes notes
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin" style={{ color: 'var(--color-text-muted)' }} />
          </div>
        ) : notes.length === 0 ? (
          <p className="text-center py-6 text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Vous n&apos;avez pas encore de notes. Ajoutez-en depuis la vue théorie d&apos;un module.
          </p>
        ) : (
          <div className="space-y-2">
            {Object.entries(groupedNotes).map(([domainId, domain]) => (
              <div key={domainId}>
                {/* Domain level */}
                <button
                  onClick={() => toggleDomain(domainId)}
                  className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-[var(--color-bg-tertiary)] transition-colors"
                  style={{ color: 'var(--color-text)' }}
                >
                  {expandedDomains.has(domainId) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                  <span className="font-semibold">{domain.name}</span>
                  <span className="text-xs ml-auto" style={{ color: 'var(--color-text-muted)' }}>
                    {Object.values(domain.packs).reduce(
                      (acc, pack) =>
                        acc +
                        Object.values(pack.disciplines).reduce(
                          (acc2, disc) =>
                            acc2 + Object.values(disc.modules).reduce((acc3, mod) => acc3 + mod.notes.length, 0),
                          0
                        ),
                      0
                    )}{' '}
                    notes
                  </span>
                </button>

                {expandedDomains.has(domainId) && (
                  <div className="ml-4 space-y-1">
                    {Object.entries(domain.packs).map(([packId, pack]) => (
                      <div key={packId}>
                        {/* Pack level */}
                        <button
                          onClick={() => togglePack(packId)}
                          className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-[var(--color-bg-tertiary)] transition-colors"
                          style={{ color: 'var(--color-text-secondary)' }}
                        >
                          {expandedPacks.has(packId) ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                          <span className="font-medium text-sm">{pack.name}</span>
                        </button>

                        {expandedPacks.has(packId) && (
                          <div className="ml-4 space-y-1">
                            {Object.entries(pack.disciplines).map(([disciplineId, discipline]) => (
                              <div key={disciplineId}>
                                {/* Discipline level */}
                                <button
                                  onClick={() => toggleDiscipline(disciplineId)}
                                  className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-[var(--color-bg-tertiary)] transition-colors"
                                  style={{ color: 'var(--color-text-secondary)' }}
                                >
                                  {expandedDisciplines.has(disciplineId) ? (
                                    <ChevronDown className="w-4 h-4" />
                                  ) : (
                                    <ChevronRight className="w-4 h-4" />
                                  )}
                                  <span className="text-sm">{discipline.name}</span>
                                </button>

                                {expandedDisciplines.has(disciplineId) && (
                                  <div className="ml-4 space-y-1">
                                    {Object.entries(discipline.modules).map(([moduleId, module]) => (
                                      <div key={moduleId}>
                                        {/* Module level */}
                                        <button
                                          onClick={() => toggleModule(moduleId)}
                                          className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-[var(--color-bg-tertiary)] transition-colors"
                                          style={{ color: 'var(--color-text-muted)' }}
                                        >
                                          {expandedModules.has(moduleId) ? (
                                            <ChevronDown className="w-4 h-4" />
                                          ) : (
                                            <ChevronRight className="w-4 h-4" />
                                          )}
                                          <span className="text-sm">{module.name}</span>
                                          <span
                                            className="text-xs px-2 py-0.5 rounded-full ml-auto"
                                            style={{
                                              backgroundColor: 'color-mix(in srgb, var(--ctp-yellow) 20%, transparent)',
                                              color: 'var(--ctp-yellow)',
                                            }}
                                          >
                                            {module.notes.length}
                                          </span>
                                        </button>

                                        {expandedModules.has(moduleId) && (
                                          <div className="ml-6 mt-2 space-y-2">
                                            {module.notes.map(renderNote)}
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
