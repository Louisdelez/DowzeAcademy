'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { StickyNote, X, Link as LinkIcon, FileText, Trash2, ExternalLink, Loader2, Users, Globe, ArrowLeft, Edit3, Bold, Italic, Underline, Strikethrough, List, Heading1, Heading2, Heading3 } from 'lucide-react';
import { StarRating } from '@/components/ui/StarRating';

interface Note {
  id: string;
  type: 'TEXT' | 'LINK';
  title: string | null;
  content: string | null;
  linkName: string | null;
  linkUrl: string | null;
  linkPreviewTitle: string | null;
  linkPreviewDescription: string | null;
  linkPreviewImage: string | null;
  createdAt: string;
  isPublic?: boolean;
}

interface CommunityNote {
  id: string;
  type: 'TEXT' | 'LINK';
  title: string | null;
  content: string | null;
  linkName: string | null;
  linkUrl: string | null;
  linkPreviewTitle: string | null;
  linkPreviewDescription: string | null;
  linkPreviewImage: string | null;
  createdAt: string;
  author: {
    id: string;
    name: string;
  };
  avgRating: number;
  ratingCount: number;
  userRating: number | null;
  isOwner: boolean;
}

interface NotesButtonProps {
  moduleId: string;
}

type ModalView = 'list' | 'new-text' | 'new-link' | 'community' | 'view-note' | 'view-community-note';

export function NotesButton({ moduleId }: NotesButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<ModalView>('list');
  const [notes, setNotes] = useState<Note[]>([]);
  const [communityNotes, setCommunityNotes] = useState<CommunityNote[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoadingCommunity, setIsLoadingCommunity] = useState(false);

  // Form states
  const [textTitle, setTextTitle] = useState('');
  const [textContent, setTextContent] = useState('');
  const [linkName, setLinkName] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  // Selected note states
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [selectedCommunityNote, setSelectedCommunityNote] = useState<CommunityNote | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editLinkName, setEditLinkName] = useState('');
  const [editIsPublic, setEditIsPublic] = useState(false);

  // Textarea refs for formatting
  const newTextareaRef = useRef<HTMLTextAreaElement>(null);
  const editTextareaRef = useRef<HTMLTextAreaElement>(null);

  // Apply markdown formatting to selected text
  const applyFormatting = (
    textareaRef: React.RefObject<HTMLTextAreaElement | null>,
    format: 'bold' | 'italic' | 'underline' | 'strikethrough' | 'list' | 'h1' | 'h2' | 'h3',
    setValue: (value: string) => void,
    currentValue: string
  ) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = currentValue.substring(start, end);

    let newText = '';
    let cursorOffset = 0;

    switch (format) {
      case 'bold':
        newText = `**${selectedText}**`;
        cursorOffset = selectedText ? 0 : 2;
        break;
      case 'italic':
        newText = `*${selectedText}*`;
        cursorOffset = selectedText ? 0 : 1;
        break;
      case 'underline':
        newText = `__${selectedText}__`;
        cursorOffset = selectedText ? 0 : 2;
        break;
      case 'strikethrough':
        newText = `~~${selectedText}~~`;
        cursorOffset = selectedText ? 0 : 2;
        break;
      case 'list':
        // For list, add "- " at the start of each line
        if (selectedText) {
          newText = selectedText.split('\n').map(line => `- ${line}`).join('\n');
        } else {
          newText = '- ';
        }
        cursorOffset = 0;
        break;
      case 'h1':
        newText = `# ${selectedText}`;
        cursorOffset = selectedText ? 0 : 2;
        break;
      case 'h2':
        newText = `## ${selectedText}`;
        cursorOffset = selectedText ? 0 : 3;
        break;
      case 'h3':
        newText = `### ${selectedText}`;
        cursorOffset = selectedText ? 0 : 4;
        break;
    }

    const newValue = currentValue.substring(0, start) + newText + currentValue.substring(end);
    setValue(newValue.slice(0, 3000));

    // Restore focus and cursor position
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = selectedText ? start + newText.length : start + cursorOffset;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  // Formatting Toolbar Component
  const FormattingToolbar = ({
    textareaRef,
    setValue,
    currentValue,
  }: {
    textareaRef: React.RefObject<HTMLTextAreaElement | null>;
    setValue: (value: string) => void;
    currentValue: string;
  }) => {
    const buttons = [
      { format: 'bold' as const, icon: Bold, title: 'Gras (**texte**)' },
      { format: 'italic' as const, icon: Italic, title: 'Italique (*texte*)' },
      { format: 'underline' as const, icon: Underline, title: 'Souligne (__texte__)' },
      { format: 'strikethrough' as const, icon: Strikethrough, title: 'Barre (~~texte~~)' },
      { format: 'list' as const, icon: List, title: 'Liste a puces' },
      { format: 'h1' as const, icon: Heading1, title: 'Titre 1' },
      { format: 'h2' as const, icon: Heading2, title: 'Titre 2' },
      { format: 'h3' as const, icon: Heading3, title: 'Titre 3' },
    ];

    return (
      <div
        className="flex items-center gap-1 p-2 rounded-t-xl border-b"
        style={{
          backgroundColor: 'var(--color-bg-tertiary)',
          borderColor: 'var(--color-border-light)',
        }}
      >
        {buttons.map(({ format, icon: Icon, title }) => (
          <button
            key={format}
            type="button"
            onClick={() => applyFormatting(textareaRef, format, setValue, currentValue)}
            className="p-1.5 rounded-lg transition-colors hover:bg-[var(--color-bg-elevated)]"
            style={{ color: 'var(--color-text-secondary)' }}
            title={title}
          >
            <Icon className="w-4 h-4" />
          </button>
        ))}
      </div>
    );
  };

  // Fetch notes when modal opens
  const fetchNotes = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/notes?moduleId=${moduleId}`);
      if (response.ok) {
        const data = await response.json();
        setNotes(data);
      }
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    } finally {
      setIsLoading(false);
    }
  }, [moduleId]);

  // Fetch community notes
  const fetchCommunityNotes = useCallback(async () => {
    setIsLoadingCommunity(true);
    try {
      const response = await fetch(`/api/notes/community?moduleId=${moduleId}`);
      if (response.ok) {
        const data = await response.json();
        setCommunityNotes(data);
      }
    } catch (error) {
      console.error('Failed to fetch community notes:', error);
    } finally {
      setIsLoadingCommunity(false);
    }
  }, [moduleId]);

  useEffect(() => {
    if (isOpen && view === 'list') {
      fetchNotes();
    } else if (isOpen && view === 'community') {
      fetchCommunityNotes();
    }
  }, [isOpen, view, fetchNotes, fetchCommunityNotes]);

  const handleOpenModal = () => {
    setIsOpen(true);
    setView('list');
  };

  const handleClose = () => {
    setIsOpen(false);
    setView('list');
    setTextTitle('');
    setTextContent('');
    setLinkName('');
    setLinkUrl('');
    setIsPublic(false);
    setSelectedNote(null);
    setSelectedCommunityNote(null);
    setIsEditing(false);
  };

  const handleViewNote = (note: Note) => {
    setSelectedNote(note);
    setEditTitle(note.title || '');
    setEditContent(note.content || '');
    setEditLinkName(note.linkName || '');
    setEditIsPublic(note.isPublic || false);
    setIsEditing(false);
    setView('view-note');
  };

  const handleViewCommunityNote = (note: CommunityNote) => {
    setSelectedCommunityNote(note);
    setView('view-community-note');
  };

  const handleBackToList = () => {
    setView('list');
    setSelectedNote(null);
    setIsEditing(false);
  };

  const handleBackToCommunity = () => {
    setView('community');
    setSelectedCommunityNote(null);
  };

  const handleSaveTextNote = async () => {
    if (!textContent.trim()) return;

    setIsSaving(true);
    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          moduleId,
          type: 'TEXT',
          title: textTitle || null,
          content: textContent,
          isPublic,
        }),
      });

      if (response.ok) {
        const newNote = await response.json();
        setNotes((prev) => [newNote, ...prev]);
        setTextTitle('');
        setTextContent('');
        setIsPublic(false);
        setView('list');
      }
    } catch (error) {
      console.error('Failed to save note:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveLinkNote = async () => {
    if (!linkUrl.trim()) return;

    setIsSaving(true);
    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          moduleId,
          type: 'LINK',
          linkName: linkName || linkUrl,
          linkUrl,
          isPublic,
        }),
      });

      if (response.ok) {
        const newNote = await response.json();
        setNotes((prev) => [newNote, ...prev]);
        setLinkName('');
        setLinkUrl('');
        setIsPublic(false);
        setView('list');
      }
    } catch (error) {
      console.error('Failed to save link:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdateNote = async () => {
    if (!selectedNote) return;

    setIsSaving(true);
    try {
      const response = await fetch(`/api/notes/${selectedNote.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: selectedNote.type === 'TEXT' ? (editTitle || null) : undefined,
          content: selectedNote.type === 'TEXT' ? editContent : undefined,
          linkName: selectedNote.type === 'LINK' ? editLinkName : undefined,
          isPublic: editIsPublic,
        }),
      });

      if (response.ok) {
        const updatedNote = await response.json();
        setNotes((prev) => prev.map((n) => (n.id === updatedNote.id ? updatedNote : n)));
        setSelectedNote(updatedNote);
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Failed to update note:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteNote = async (noteId: string) => {
    try {
      const response = await fetch(`/api/notes?id=${noteId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setNotes((prev) => prev.filter((n) => n.id !== noteId));
        if (selectedNote?.id === noteId) {
          setView('list');
          setSelectedNote(null);
        }
      }
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  const handleRateNote = async (noteId: string, stars: number) => {
    try {
      if (stars === 0) {
        const response = await fetch(`/api/notes/${noteId}/rate`, {
          method: 'DELETE',
        });
        if (response.ok) {
          const data = await response.json();
          setCommunityNotes((prev) =>
            prev.map((n) =>
              n.id === noteId
                ? { ...n, userRating: null, avgRating: data.avgRating, ratingCount: data.ratingCount }
                : n
            )
          );
          if (selectedCommunityNote?.id === noteId) {
            setSelectedCommunityNote((prev) =>
              prev ? { ...prev, userRating: null, avgRating: data.avgRating, ratingCount: data.ratingCount } : null
            );
          }
        }
      } else {
        const response = await fetch(`/api/notes/${noteId}/rate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ stars }),
        });
        if (response.ok) {
          const data = await response.json();
          setCommunityNotes((prev) =>
            prev.map((n) =>
              n.id === noteId
                ? { ...n, userRating: data.userRating, avgRating: data.avgRating, ratingCount: data.ratingCount }
                : n
            )
          );
          if (selectedCommunityNote?.id === noteId) {
            setSelectedCommunityNote((prev) =>
              prev ? { ...prev, userRating: data.userRating, avgRating: data.avgRating, ratingCount: data.ratingCount } : null
            );
          }
        }
      }
    } catch (error) {
      console.error('Failed to rate note:', error);
    }
  };

  // Simple markdown renderer for text notes
  const renderMarkdown = (text: string) => {
    let html = text
      .replace(/^### (.+)$/gm, '<h3 class="text-base font-semibold mt-3 mb-1">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="text-lg font-semibold mt-3 mb-1">$1</h2>')
      .replace(/^# (.+)$/gm, '<h1 class="text-xl font-bold mt-3 mb-2">$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/__(.+?)__/g, '<u>$1</u>')
      .replace(/~~(.+?)~~/g, '<del>$1</del>')
      .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
      .replace(/\n/g, '<br>');

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  // Toggle Switch Component
  const ToggleSwitch = ({ enabled, onToggle, label }: { enabled: boolean; onToggle: () => void; label: string }) => (
    <div className="flex items-center justify-between p-3 rounded-xl mb-4" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
      <div className="flex items-center gap-2">
        <Globe className="w-4 h-4" style={{ color: enabled ? 'var(--ctp-green)' : 'var(--color-text-muted)' }} />
        <span className="text-sm" style={{ color: 'var(--color-text)' }}>{label}</span>
      </div>
      <button
        type="button"
        onClick={onToggle}
        className="relative w-11 h-6 rounded-full transition-colors duration-200"
        style={{
          backgroundColor: enabled ? 'var(--ctp-green)' : 'var(--color-bg-elevated)',
          borderWidth: '1px',
          borderColor: enabled ? 'var(--ctp-green)' : 'var(--color-border-light)',
        }}
      >
        <span
          className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-200"
          style={{
            backgroundColor: enabled ? 'var(--ctp-base)' : 'var(--color-text-muted)',
            transform: enabled ? 'translateX(20px)' : 'translateX(0)',
          }}
        />
      </button>
    </div>
  );

  // Get header title based on view
  const getHeaderTitle = () => {
    switch (view) {
      case 'list': return 'Mes notes';
      case 'new-text': return 'Nouvelle note';
      case 'new-link': return 'Ajouter un lien';
      case 'community': return 'Notes communautaires';
      case 'view-note': return isEditing ? 'Modifier la note' : 'Ma note';
      case 'view-community-note': return 'Note communautaire';
      default: return 'Notes';
    }
  };

  return (
    <>
      {/* Floating Notes Button */}
      <button
        onClick={handleOpenModal}
        className="fixed top-56 right-4 z-40 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl"
        style={{
          background: 'linear-gradient(135deg, var(--ctp-yellow), var(--ctp-peach))',
          color: 'var(--ctp-base)',
        }}
        title="Mes notes"
        aria-label="Ouvrir mes notes"
      >
        <StickyNote className="w-6 h-6" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          onClick={handleClose}
        >
          {/* Modal Content */}
          <div
            className="relative w-full max-w-lg max-h-[80vh] rounded-2xl shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200"
            style={{
              backgroundColor: 'var(--color-bg-elevated)',
              borderWidth: '1px',
              borderColor: 'var(--color-border-light)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--color-border-light)' }}>
              <div className="flex items-center gap-2">
                {(view === 'view-note' || view === 'view-community-note') && (
                  <button
                    onClick={view === 'view-note' ? handleBackToList : handleBackToCommunity}
                    className="p-1 rounded-lg transition-colors hover:bg-[var(--color-bg-tertiary)] mr-1"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}
                {view === 'community' || view === 'view-community-note' ? (
                  <Users className="w-5 h-5" style={{ color: 'var(--ctp-blue)' }} />
                ) : (
                  <StickyNote className="w-5 h-5" style={{ color: 'var(--ctp-yellow)' }} />
                )}
                <h2 className="font-semibold" style={{ color: 'var(--color-text)' }}>
                  {getHeaderTitle()}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="p-1 rounded-lg transition-colors hover:bg-[var(--color-bg-tertiary)]"
                style={{ color: 'var(--color-text-muted)' }}
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {/* List View */}
              {view === 'list' && (
                <>
                  {/* Action buttons */}
                  <div className="flex gap-3 mb-4">
                    <button
                      onClick={() => setView('new-text')}
                      className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl transition-all hover:scale-[1.02]"
                      style={{
                        backgroundColor: 'var(--color-bg-tertiary)',
                        borderWidth: '1px',
                        borderColor: 'var(--color-border-light)',
                        color: 'var(--color-text)',
                      }}
                    >
                      <FileText className="w-5 h-5" />
                      <span className="font-medium text-sm">Nouvelle note</span>
                    </button>
                    <button
                      onClick={() => setView('new-link')}
                      className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl transition-all hover:scale-[1.02]"
                      style={{
                        backgroundColor: 'var(--color-bg-tertiary)',
                        borderWidth: '1px',
                        borderColor: 'var(--color-border-light)',
                        color: 'var(--color-text)',
                      }}
                    >
                      <LinkIcon className="w-5 h-5" />
                      <span className="font-medium text-sm">Ajouter un lien</span>
                    </button>
                  </div>

                  {/* Notes list */}
                  {isLoading ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="w-6 h-6 animate-spin" style={{ color: 'var(--color-text-muted)' }} />
                    </div>
                  ) : notes.length === 0 ? (
                    <p className="text-center py-8 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                      Aucune note pour ce module
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {notes.map((note) => (
                        <div
                          key={note.id}
                          onClick={() => handleViewNote(note)}
                          className="p-3 rounded-xl cursor-pointer transition-all hover:scale-[1.01]"
                          style={{
                            backgroundColor: 'var(--color-bg-tertiary)',
                            borderWidth: '1px',
                            borderColor: 'var(--color-border-light)',
                          }}
                        >
                          {note.type === 'TEXT' ? (
                            <div>
                              {note.title && (
                                <h3 className="font-medium text-sm mb-1" style={{ color: 'var(--color-text)' }}>
                                  {note.title}
                                </h3>
                              )}
                              <div className="text-sm line-clamp-2" style={{ color: 'var(--color-text-secondary)' }}>
                                {renderMarkdown(note.content || '')}
                              </div>
                            </div>
                          ) : (
                            <div className="flex gap-3">
                              {note.linkPreviewImage && (
                                <img
                                  src={note.linkPreviewImage}
                                  alt=""
                                  className="w-16 h-16 rounded-lg object-cover shrink-0"
                                />
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1 mb-1">
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
                              </div>
                            </div>
                          )}
                          <div className="flex justify-between items-center mt-2 pt-2" style={{ borderTopWidth: '1px', borderColor: 'var(--color-border-light)' }}>
                            <div className="flex items-center gap-2">
                              <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                {new Date(note.createdAt).toLocaleDateString('fr-FR')}
                              </span>
                              {note.isPublic && (
                                <span
                                  className="text-xs px-1.5 py-0.5 rounded"
                                  style={{ backgroundColor: 'color-mix(in srgb, var(--ctp-green) 20%, transparent)', color: 'var(--ctp-green)' }}
                                >
                                  Public
                                </span>
                              )}
                            </div>
                            <button
                              onClick={(e) => { e.stopPropagation(); handleDeleteNote(note.id); }}
                              className="p-1 rounded hover:bg-[var(--color-bg-elevated)] transition-colors"
                              style={{ color: 'var(--ctp-red)' }}
                              title="Supprimer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* View/Edit Note */}
              {view === 'view-note' && selectedNote && (
                <div className="space-y-4">
                  {isEditing ? (
                    <>
                      <ToggleSwitch
                        enabled={editIsPublic}
                        onToggle={() => setEditIsPublic(!editIsPublic)}
                        label="Partager avec la communaute"
                      />
                      {selectedNote.type === 'TEXT' ? (
                        <>
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>
                              Nom de la note (optionnel)
                            </label>
                            <input
                              type="text"
                              value={editTitle}
                              onChange={(e) => setEditTitle(e.target.value.slice(0, 100))}
                              placeholder="Ex: Recapitulatif du cours"
                              className="w-full p-3 rounded-xl text-sm"
                              style={{
                                backgroundColor: 'var(--color-bg-tertiary)',
                                borderWidth: '1px',
                                borderColor: 'var(--color-border-light)',
                                color: 'var(--color-text)',
                              }}
                            />
                          </div>
                          <div
                            className="rounded-xl overflow-hidden"
                            style={{
                              borderWidth: '1px',
                              borderColor: 'var(--color-border-light)',
                            }}
                          >
                            <FormattingToolbar
                              textareaRef={editTextareaRef}
                              setValue={setEditContent}
                              currentValue={editContent}
                            />
                            <textarea
                              ref={editTextareaRef}
                              value={editContent}
                              onChange={(e) => setEditContent(e.target.value.slice(0, 3000))}
                              className="w-full h-40 p-3 resize-none text-sm border-0"
                              style={{
                                backgroundColor: 'var(--color-bg-tertiary)',
                                color: 'var(--color-text)',
                                outline: 'none',
                              }}
                            />
                          </div>
                          <div className="text-xs text-right" style={{ color: 'var(--color-text-muted)' }}>
                            {editContent.length}/3000
                          </div>
                        </>
                      ) : (
                        <div>
                          <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>
                            Nom du lien
                          </label>
                          <input
                            type="text"
                            value={editLinkName}
                            onChange={(e) => setEditLinkName(e.target.value)}
                            className="w-full p-3 rounded-xl text-sm"
                            style={{
                              backgroundColor: 'var(--color-bg-tertiary)',
                              borderWidth: '1px',
                              borderColor: 'var(--color-border-light)',
                              color: 'var(--color-text)',
                            }}
                          />
                        </div>
                      )}
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => {
                            setIsEditing(false);
                            setEditTitle(selectedNote.title || '');
                            setEditContent(selectedNote.content || '');
                            setEditLinkName(selectedNote.linkName || '');
                            setEditIsPublic(selectedNote.isPublic || false);
                          }}
                          className="px-4 py-2 rounded-lg text-sm font-medium"
                          style={{
                            backgroundColor: 'var(--color-bg-tertiary)',
                            color: 'var(--color-text-secondary)',
                          }}
                        >
                          Annuler
                        </button>
                        <button
                          onClick={handleUpdateNote}
                          disabled={isSaving}
                          className="px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
                          style={{
                            backgroundColor: 'var(--ctp-yellow)',
                            color: 'var(--ctp-base)',
                          }}
                        >
                          {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Enregistrer'}
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Display mode */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                            {new Date(selectedNote.createdAt).toLocaleDateString('fr-FR')}
                          </span>
                          {selectedNote.isPublic && (
                            <span
                              className="text-xs px-1.5 py-0.5 rounded"
                              style={{ backgroundColor: 'color-mix(in srgb, var(--ctp-green) 20%, transparent)', color: 'var(--ctp-green)' }}
                            >
                              Public
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => setIsEditing(true)}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                          style={{
                            backgroundColor: 'color-mix(in srgb, var(--ctp-blue) 20%, transparent)',
                            color: 'var(--ctp-blue)',
                          }}
                        >
                          <Edit3 className="w-4 h-4" />
                          Modifier
                        </button>
                      </div>

                      {selectedNote.type === 'TEXT' ? (
                        <div
                          className="p-4 rounded-xl text-sm min-h-[200px]"
                          style={{
                            backgroundColor: 'var(--color-bg-tertiary)',
                            color: 'var(--color-text-secondary)',
                          }}
                        >
                          {selectedNote.title && (
                            <h3 className="font-semibold text-base mb-3" style={{ color: 'var(--color-text)' }}>
                              {selectedNote.title}
                            </h3>
                          )}
                          {renderMarkdown(selectedNote.content || '')}
                        </div>
                      ) : (
                        <div
                          className="p-4 rounded-xl"
                          style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
                        >
                          {selectedNote.linkPreviewImage && (
                            <img
                              src={selectedNote.linkPreviewImage}
                              alt=""
                              className="w-full h-40 rounded-lg object-cover mb-3"
                            />
                          )}
                          <h3 className="font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                            {selectedNote.linkName || selectedNote.linkPreviewTitle || 'Lien'}
                          </h3>
                          {selectedNote.linkPreviewDescription && (
                            <p className="text-sm mb-3" style={{ color: 'var(--color-text-muted)' }}>
                              {selectedNote.linkPreviewDescription}
                            </p>
                          )}
                          <a
                            href={selectedNote.linkUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm"
                            style={{ color: 'var(--ctp-blue)' }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Ouvrir le lien
                          </a>
                        </div>
                      )}

                      <button
                        onClick={() => handleDeleteNote(selectedNote.id)}
                        className="w-full flex items-center justify-center gap-2 p-3 rounded-xl mt-4"
                        style={{
                          backgroundColor: 'color-mix(in srgb, var(--ctp-red) 20%, transparent)',
                          color: 'var(--ctp-red)',
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="font-medium text-sm">Supprimer cette note</span>
                      </button>
                    </>
                  )}
                </div>
              )}

              {/* View Community Note */}
              {view === 'view-community-note' && selectedCommunityNote && (
                <div className="space-y-4">
                  {/* Author and rating */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium" style={{ color: 'var(--ctp-blue)' }}>
                      {selectedCommunityNote.author.name}
                      {selectedCommunityNote.isOwner && (
                        <span className="ml-1" style={{ color: 'var(--color-text-muted)' }}>(vous)</span>
                      )}
                    </span>
                    <div className="flex items-center gap-2">
                      <StarRating rating={selectedCommunityNote.avgRating} readonly size="md" />
                      {selectedCommunityNote.ratingCount > 0 && (
                        <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                          ({selectedCommunityNote.avgRating.toFixed(1)})
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Note content */}
                  {selectedCommunityNote.type === 'TEXT' ? (
                    <div
                      className="p-4 rounded-xl text-sm min-h-[200px]"
                      style={{
                        backgroundColor: 'var(--color-bg-tertiary)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {selectedCommunityNote.title && (
                        <h3 className="font-semibold text-base mb-3" style={{ color: 'var(--color-text)' }}>
                          {selectedCommunityNote.title}
                        </h3>
                      )}
                      {renderMarkdown(selectedCommunityNote.content || '')}
                    </div>
                  ) : (
                    <div
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
                    >
                      {selectedCommunityNote.linkPreviewImage && (
                        <img
                          src={selectedCommunityNote.linkPreviewImage}
                          alt=""
                          className="w-full h-40 rounded-lg object-cover mb-3"
                        />
                      )}
                      <h3 className="font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                        {selectedCommunityNote.linkName || selectedCommunityNote.linkPreviewTitle || 'Lien'}
                      </h3>
                      {selectedCommunityNote.linkPreviewDescription && (
                        <p className="text-sm mb-3" style={{ color: 'var(--color-text-muted)' }}>
                          {selectedCommunityNote.linkPreviewDescription}
                        </p>
                      )}
                      <a
                        href={selectedCommunityNote.linkUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm"
                        style={{ color: 'var(--ctp-blue)' }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ouvrir le lien
                      </a>
                    </div>
                  )}

                  {/* Rate this note (if not owner) */}
                  {!selectedCommunityNote.isOwner && (
                    <div
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
                    >
                      <p className="text-sm mb-3" style={{ color: 'var(--color-text)' }}>
                        Noter cette note:
                      </p>
                      <div className="flex justify-center">
                        <StarRating
                          rating={selectedCommunityNote.userRating || 0}
                          onRate={(stars) => handleRateNote(selectedCommunityNote.id, stars)}
                          size="lg"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* New Text Note View */}
              {view === 'new-text' && (
                <div className="space-y-4">
                  <ToggleSwitch
                    enabled={isPublic}
                    onToggle={() => setIsPublic(!isPublic)}
                    label="Partager avec la communaute"
                  />
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>
                      Nom de la note (optionnel)
                    </label>
                    <input
                      type="text"
                      value={textTitle}
                      onChange={(e) => setTextTitle(e.target.value.slice(0, 100))}
                      placeholder="Ex: Recapitulatif du cours"
                      className="w-full p-3 rounded-xl text-sm"
                      style={{
                        backgroundColor: 'var(--color-bg-tertiary)',
                        borderWidth: '1px',
                        borderColor: 'var(--color-border-light)',
                        color: 'var(--color-text)',
                      }}
                    />
                  </div>
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{
                      borderWidth: '1px',
                      borderColor: 'var(--color-border-light)',
                    }}
                  >
                    <FormattingToolbar
                      textareaRef={newTextareaRef}
                      setValue={setTextContent}
                      currentValue={textContent}
                    />
                    <textarea
                      ref={newTextareaRef}
                      value={textContent}
                      onChange={(e) => setTextContent(e.target.value.slice(0, 3000))}
                      placeholder="Ecrivez votre note ici..."
                      className="w-full h-40 p-3 resize-none text-sm border-0"
                      style={{
                        backgroundColor: 'var(--color-bg-tertiary)',
                        color: 'var(--color-text)',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      {textContent.length}/3000
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => { setView('list'); setTextTitle(''); setIsPublic(false); }}
                        className="px-4 py-2 rounded-lg text-sm font-medium"
                        style={{
                          backgroundColor: 'var(--color-bg-tertiary)',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        Annuler
                      </button>
                      <button
                        onClick={handleSaveTextNote}
                        disabled={!textContent.trim() || isSaving}
                        className="px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
                        style={{
                          backgroundColor: 'var(--ctp-yellow)',
                          color: 'var(--ctp-base)',
                        }}
                      >
                        {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Enregistrer'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* New Link View */}
              {view === 'new-link' && (
                <div className="space-y-4">
                  <ToggleSwitch
                    enabled={isPublic}
                    onToggle={() => setIsPublic(!isPublic)}
                    label="Partager avec la communaute"
                  />
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>
                      Nom (optionnel)
                    </label>
                    <input
                      type="text"
                      value={linkName}
                      onChange={(e) => setLinkName(e.target.value)}
                      placeholder="Mon tutoriel prefere"
                      className="w-full p-3 rounded-xl text-sm"
                      style={{
                        backgroundColor: 'var(--color-bg-tertiary)',
                        borderWidth: '1px',
                        borderColor: 'var(--color-border-light)',
                        color: 'var(--color-text)',
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>
                      URL du lien
                    </label>
                    <input
                      type="url"
                      value={linkUrl}
                      onChange={(e) => setLinkUrl(e.target.value)}
                      placeholder="https://..."
                      className="w-full p-3 rounded-xl text-sm"
                      style={{
                        backgroundColor: 'var(--color-bg-tertiary)',
                        borderWidth: '1px',
                        borderColor: 'var(--color-border-light)',
                        color: 'var(--color-text)',
                      }}
                    />
                  </div>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    L&apos;apercu du lien (titre, description, image) sera recupere automatiquement.
                  </p>
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => { setView('list'); setIsPublic(false); }}
                      className="px-4 py-2 rounded-lg text-sm font-medium"
                      style={{
                        backgroundColor: 'var(--color-bg-tertiary)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      Annuler
                    </button>
                    <button
                      onClick={handleSaveLinkNote}
                      disabled={!linkUrl.trim() || isSaving}
                      className="px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
                      style={{
                        backgroundColor: 'var(--ctp-yellow)',
                        color: 'var(--ctp-base)',
                      }}
                    >
                      {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Ajouter'}
                    </button>
                  </div>
                </div>
              )}

              {/* Community View */}
              {view === 'community' && (
                <>
                  {isLoadingCommunity ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="w-6 h-6 animate-spin" style={{ color: 'var(--color-text-muted)' }} />
                    </div>
                  ) : communityNotes.length === 0 ? (
                    <div className="text-center py-8">
                      <Users className="w-12 h-12 mx-auto mb-3" style={{ color: 'var(--color-text-muted)' }} />
                      <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        Aucune note partagee pour ce module
                      </p>
                      <p className="text-xs mt-2" style={{ color: 'var(--color-text-muted)' }}>
                        Soyez le premier a partager une note !
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {communityNotes.map((note) => (
                        <div
                          key={note.id}
                          onClick={() => handleViewCommunityNote(note)}
                          className="p-3 rounded-xl cursor-pointer transition-all hover:scale-[1.01]"
                          style={{
                            backgroundColor: 'var(--color-bg-tertiary)',
                            borderWidth: '1px',
                            borderColor: 'var(--color-border-light)',
                          }}
                        >
                          {/* Author and rating header */}
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-medium" style={{ color: 'var(--ctp-blue)' }}>
                              {note.author.name}
                              {note.isOwner && (
                                <span className="ml-1" style={{ color: 'var(--color-text-muted)' }}>(vous)</span>
                              )}
                            </span>
                            <div className="flex items-center gap-1">
                              <StarRating rating={note.avgRating} readonly size="sm" />
                              {note.ratingCount > 0 && (
                                <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                  ({note.avgRating.toFixed(1)})
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Note content preview */}
                          {note.type === 'TEXT' ? (
                            <div>
                              {note.title && (
                                <h3 className="font-medium text-sm mb-1" style={{ color: 'var(--color-text)' }}>
                                  {note.title}
                                </h3>
                              )}
                              <div className="text-sm line-clamp-2" style={{ color: 'var(--color-text-secondary)' }}>
                                {renderMarkdown(note.content || '')}
                              </div>
                            </div>
                          ) : (
                            <div className="flex gap-3">
                              {note.linkPreviewImage && (
                                <img
                                  src={note.linkPreviewImage}
                                  alt=""
                                  className="w-16 h-16 rounded-lg object-cover shrink-0"
                                />
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1 mb-1">
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
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer with Community button */}
            {(view === 'list' || view === 'community') && (
              <div className="p-4 border-t" style={{ borderColor: 'var(--color-border-light)' }}>
                <button
                  onClick={() => setView(view === 'community' ? 'list' : 'community')}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-xl transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: view === 'community' ? 'var(--ctp-yellow)' : 'color-mix(in srgb, var(--ctp-blue) 20%, transparent)',
                    color: view === 'community' ? 'var(--ctp-base)' : 'var(--ctp-blue)',
                  }}
                >
                  {view === 'community' ? (
                    <>
                      <StickyNote className="w-5 h-5" />
                      <span className="font-medium">Mes notes</span>
                    </>
                  ) : (
                    <>
                      <Users className="w-5 h-5" />
                      <span className="font-medium">Communautaire</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
