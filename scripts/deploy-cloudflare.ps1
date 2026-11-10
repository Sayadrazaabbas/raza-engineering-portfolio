param(
  [Parameter(Mandatory = $true)][string]$ProjectName,
  [string]$Branch = 'main'
)

$repoRoot = Split-Path -Parent $PSScriptRoot
$distPath = Join-Path $repoRoot 'dist'
if (-not (Test-Path -LiteralPath (Join-Path $distPath 'index.html'))) {
  throw "No deployable dist/index.html found at $distPath"
}
Push-Location -LiteralPath $repoRoot
try {
  npm run validate
  if ($LASTEXITCODE -ne 0) { throw 'Portfolio validation failed; deployment stopped.' }
  npx wrangler pages deploy dist --project-name $ProjectName --branch $Branch
  if ($LASTEXITCODE -ne 0) { throw 'Cloudflare Pages deployment failed.' }
}
finally { Pop-Location }
