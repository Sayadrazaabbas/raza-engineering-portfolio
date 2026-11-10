param(
  [string]$MediaRoot = 'F:\DOCUMENTS\PORTFOLIO\IMAGES FOR PORTFOLIO',
  [string]$OutputPath = 'F:\Raza_Engineering_Portfolio_2026\planning\Media_Inventory.csv'
)

$extensions = @('.jpg','.jpeg','.png','.webp','.mp4','.mov')
$files = Get-ChildItem -LiteralPath $MediaRoot -Recurse -File -ErrorAction Stop |
  Where-Object { $extensions -contains $_.Extension.ToLowerInvariant() }
$records = foreach ($file in $files) {
  $relative = $file.FullName.Substring($MediaRoot.Length).TrimStart('\')
  [pscustomobject]@{
    RelativePath = $relative
    Extension = $file.Extension.ToLowerInvariant()
    SizeMB = [math]::Round($file.Length / 1MB, 2)
    CandidateProject = ''
    ReviewStatus = 'Unidentified; not approved for publication'
  }
}
$records | Export-Csv -LiteralPath $OutputPath -NoTypeInformation -Encoding UTF8
Write-Output "Indexed $($records.Count) media files to $OutputPath"
